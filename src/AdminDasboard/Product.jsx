import React, { useEffect, useState } from "react";
import { saveProductDetails } from "../Redux/api/service";
import { useSelector } from "react-redux";

const Product = () => {
  const token = useSelector((state) => state.auth.token);
  const [product, setProduct] = useState({
    name: "",
    modelNo: "",
    inrPrice: "",
    usdPrice: "",
    quantity: "",
    stock: "",
    GstRate: "",
    moq: "",
    paymentType: [],
    manufacturer: { name: "" },
    category: { name: "", description: "" },
    subCategory: { name: "", description: "" },
    shortDescription: "",
    longDescription: "",
    specifications: [],
    keyFactors: [],
    vendors: [],
    image: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await saveProductDetails();
        if (resp.product) setProduct(resp.product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (field, key, value) => {
    setProduct((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [key]: value,
      },
    }));
  };

  const handleArrayChange = (field, index, value) => {
    const updatedArray = [...product[field]];
    updatedArray[index] = value;
    setProduct((prev) => ({ ...prev, [field]: updatedArray }));
  };

  const addArrayItem = (field, newItem) => {
    setProduct((prev) => ({
      ...prev,
      [field]: [...prev[field], newItem],
    }));
  };

  const removeArrayItem = (field, index) => {
    const updatedArray = [...product[field]];
    updatedArray.splice(index, 1);
    setProduct((prev) => ({ ...prev, [field]: updatedArray }));
  };

  

  const handleSubmit = async()=>{
    console.log(product);
    try {
      const response = await saveProductDetails(product,token);
      console.log(response);
    } catch (error) {
      console.error("Error saving product details:", error);
      // alert("Failed to save product details.");
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-100">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Product Details</h1>
          <div className="gap-4">
            {/* General Details */}

            <h2 className="text-xl font-semibold">General Details</h2>
            <div className="grid grid-cols-2 gap-2">
              {["name", "price", "inrPrice", "usdPrice", "quantity", "stock", "GstRate", "moq"].map((field) => (
                <div className="grid ">
                  <label key={field}>
                    {field.replace(/([A-Z])/g, " $1").toUpperCase()}:
                    <input
                      type={field.includes("Price") || field === "quantity" || field === "moq" ? "number" : "text"}
                      name={field}
                      value={product[field]}
                      onChange={handleChange}
                      className="border p-2 w-full rounded"
                    />
                  </label>
                </div>
              ))}
              <div className="grid ">
                <label>
                  SHORT DESCRIPTION
                  <textarea
                    rows={5}
                    className="border p-2 w-full rounded"
                  />
                </label>
              </div>
              <div className="grid ">
                <label>
                  LONG DESCRIPTION
                  <textarea
                    rows={5}
                    className="border p-2 w-full rounded"
                  />
                </label>
              </div>


              <div className="grid mt-5">
                <h2 className="text-xl font-semibold">Model No</h2>

                <input
                  placeholder="model no"
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>
          </div>

          {/* Manufacturer and Category */}
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Manufacturer </h2>

            <input
              type="text"
              value={product.manufacturer.name}
              onChange={(e) => handleNestedChange("manufacturer", "name", e.target.value)}
              className="border p-2 w-full rounded"
              placeholder="manufacturer name"
            />

          </div>
          <div className="mt-5 gap-4 grid">
            <h2 className="text-xl font-semibold">Category & Sub Category</h2>
            <div className="grid grid-cols-2 gap-2">
              {["category", "subCategory"].map((field) => (
                <div key={field} className="grid gap-4">
                  <h3 className="font-semibold">{field.replace(/([A-Z])/g, " $1").toUpperCase()}</h3>
                  <label >
                    NAME
                    <input
                      type="text"
                      value={product[field].name}
                      onChange={(e) => handleNestedChange(field, "name", e.target.value)}
                      className="border p-2 w-full rounded"
                    />
                  </label>
                  <label>
                    DESCRIPTION:
                    <textarea
                      value={product[field].description}
                      onChange={(e) => handleNestedChange(field, "description", e.target.value)}
                      className="border p-2 w-full rounded"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications and Key Factors */}
          <div className="grid grid-cols-2 gap-2">
            {["specifications", "keyFactors"].map((field) => (
              <div key={field} className="mb-4">
                <h2 className="text-xl font-semibold mb-2">{field.replace(/([A-Z])/g, " $1").toUpperCase()}</h2>
                <div className=" flex-wrap gap-2">
                  {product[field].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 mb-3">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange(field, index, e.target.value)}
                        className="border p-2 rounded w-full"
                      />
                      <button
                        onClick={() => removeArrayItem(field, index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayItem(field, "")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add {field.replace(/([A-Z])/g, " $1")}
                  </button>
                </div>
              </div>
            ))}
          </div>



          <div className="grid grid-cols-2 gap-2 ">
            {/* Vendors */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">Vendors</h2>
              {product.vendors.map((vendor, index) => (
                <div key={index} className="border p-4 rounded mb-2">
                  {Object.keys(vendor).map((key) => (
                    <label key={key} className="block">
                      {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
                      <input
                        type="text"
                        value={vendor[key]}
                        onChange={(e) => handleArrayChange("vendors", index, { ...vendor, [key]: e.target.value })}
                        className="border p-2 w-full rounded"
                      />
                    </label>
                  ))}
                  <button
                    onClick={() => removeArrayItem("vendors", index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove Vendor
                  </button>
                </div>
              ))}
              <button
                onClick={() =>
                  addArrayItem("vendors", {
                    company: "",
                    address: "",
                    concernedPerson: "",
                    phoneNumber: "",
                    mobileNumber: "",
                    email: "",
                    lastPurchasedDate: "",
                    lastPurchasedPrice: "",
                  })
                }
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add Vendor
              </button>
            </div>

            {/* Images */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">Images</h2>
              {product.image.map((url, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="file"
                    multiple
                    value={url}
                    onChange={(e) => handleArrayChange("image", index, e.target.value)}
                    className="border p-2 w-full rounded"
                  />
                  <button
                    onClick={() => removeArrayItem("image", index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => addArrayItem("image", "")}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add Image
              </button>
            </div>
          </div>
          <button
          type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Save Product Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
