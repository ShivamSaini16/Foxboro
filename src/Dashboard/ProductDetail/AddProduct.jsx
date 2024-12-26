import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SecurityIcon from '@mui/icons-material/Security';
import MoneyIcon from '@mui/icons-material/Money';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ProductSide from "./ProductSide";
import TableProduct from "./TableProduct";
import { useParams } from "react-router-dom";
import { oneProductShow } from "../../Redux/api/service";

function AddProduct() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = [
        {
            name: "6 Month Warranty Brand",
            icon: <SecurityIcon className="text-orange-500 text-4xl" />,
        },
        {
            name: "100% Original Products",
            icon: <MoneyIcon className="text-orange-500 text-4xl" />,
        },
        {
            name: "Secure Payments",
            icon: <AdminPanelSettingsIcon className="text-orange-500 text-4xl" />,
        },
        {
            name: "100% Buyer Protection",
            icon: <StoreIcon className="text-orange-500 text-4xl" />,
        },
        {
            name: "Top Brands",
            icon: <ShoppingBagIcon className="text-orange-500 text-4xl" />,
        },
    ];

    const { id } = useParams(); // Get the product ID from the route
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch product details by ID
        const fetchProduct = async () => {
            try {
                const response = await oneProductShow(id);
                // console.log(response);
                setProduct(response.product); // Assuming response contains product data
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch product details.");
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div> 
    else 
    return (
        <div className="flex">
            <div className="w-3/4  p-2 ">
                <div className=" flex gap-4 m-2 bg-gray-50 rounded-lg shadow-lg border border-gray-200 ">
                    {/* Main */}
                    <div className="relative w-full max-w-2xl p-6">
                        {/* Large Image */}
                        <div className="overflow-hidden rounded-lg h-96 w-auto">
                            <img
                                src={product?.image[currentIndex]} 
                                alt={`Slide ${currentIndex + 1}`}                               
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                            />
                            {/* {console.log(product.image)} */}
                        </div>
                        {/* Thumbnails */}
                        <div className="flex space-x-4 mt-4 justify-between">
                            {product?.image?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-16 h-16 rounded-md cursor-pointer border-2 ${currentIndex === index ? "border-blue-500" : "border-transparent"
                                        }`}
                                    onClick={() => setCurrentIndex(index)} // Change the large image
                                />
                            )) || <div>No images available</div>} {/* Optional fallback */}
                        </div>


                    </div>
                    <div className="flex flex-col gap-4 p-5">
                        <div className="text-lg font-semibold text-gray-700">🛍️ Product Name: {product.name}</div>
                        <div className="text-sm text-gray-600">🏭 Manufacturer: {product.manufacturer.name} </div>
                        <div className="text-sm text-gray-600">📦 Model Name:{product.modelNo}</div>
                        <div className="text-sm text-gray-600">📝 Description {product.category.description}</div>
                        <div className="text-sm text-gray-600">✨ Key Features{product.keyFactors[0]}</div>
                        <div className="text-sm text-gray-600">💰 Price{product.price}</div>
                        <div className="text-sm text-gray-600">📋 Availability{product.specifications[0]}</div>
                        <div className="text-sm text-gray-600">⭐ Reviews{product.review[0]}</div>
                        <Button variant="outlined">Download Datasheet</Button>
                    </div>
                </div>
                <div className="flex justify-between items-center m-2 bg-gray-50 p-6 rounded-lg shadow-md space-x-4">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-2 w-40"
                        >
                            {item.icon}
                            <p className="text-sm text-gray-700 font-medium">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {<TableProduct product={product}></TableProduct>}
                </div>

            </div>

            <div>
                <ProductSide />
            </div>

        </div>

    );
    // if (error) return <div>{error}</div>;


}

export default AddProduct;
