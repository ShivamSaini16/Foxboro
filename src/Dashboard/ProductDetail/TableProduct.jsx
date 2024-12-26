import React, { useState } from 'react'

function TableProduct({product}) {
    const [activeTab, setActiveTab] = useState("Specifications");

    const specifications = [
        { label: "Type of Product", value: product?.category?.name || "not Available" },
        { label: "Model No.", value: "SG-1234" },
        { label: "Application", value: "Industrial Coating" },
        { label: "Material", value: "Aluminum" },
        { label: "Flow Rate", value: "1.2 L/min" },
        { label: "Pattern Width", value: "20 cm" },
        { label: "Package Contains", value: "1 Spray Gun, Manual" },
        { label: "Country of Origin", value: "USA" },
        { label: "Name of Manufacturer/Importer", value: "TechTools Inc." },
        { label: "Warranty Duration", value: "6 Months" },
    ];

    const description = `This spray gun is perfect for industrial applications, offering a high-quality 
  aluminum build with excellent flow rate and pattern width. Suitable for both professionals and 
  hobbyists, it ensures durability and precise performance. The package includes all necessary components.`;




    return (
        <div>
            <div className="bg-gray-50 p-7 rounded-lg shadow-md max-w-9xl mx-auto">
                {console.log(product,"table product")}
                <div className="flex border-b mb-4">
                    <button
                        className={`flex-1 py-2 text-center font-medium ${activeTab === "Specifications"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-gray-800"
                            }`}
                        onClick={() => setActiveTab("Specifications")}
                    >
                        Specifications
                    </button>
                    <button
                        className={`flex-1 py-2 text-center font-medium ${activeTab === "Description"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-gray-800"
                            }`}
                        onClick={() => setActiveTab("Description")}
                    >
                        Description
                    </button>
                </div>

                {/* Content */}
                <div className="h-[400px] overflow-y-auto">
                    {activeTab === "Specifications" && (
                        <table className="w-full text-left border-collapse border border-gray-200 h-full">
                            <thead>
                                <tr>
                                    <th className="border border-gray-200 p-2 bg-gray-100 text-gray-600 font-medium">
                                        Specification
                                    </th>
                                    <th className="border border-gray-200 p-2 bg-gray-100 text-gray-600 font-medium">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {specifications.map((spec, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-200 p-2 text-gray-700">
                                            {spec.label}
                                        </td>
                                        <td className="border border-gray-200 p-2 text-gray-800">
                                            {spec.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {activeTab === "Description" && (
                        <div className="h-full text-gray-700 leading-relaxed p-2">
                            <p>{product.longDescription}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TableProduct
