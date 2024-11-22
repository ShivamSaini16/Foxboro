import { Button } from "@mui/material";
import React, { useState } from "react";
import SecurityIcon from '@mui/icons-material/Security';
import MoneyIcon from '@mui/icons-material/Money';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ProductSide from "./ProductSide";
import TableProduct from "./TableProduct";

function AddProduct() {
    const images = [
        "https://tse3.mm.bing.net/th?id=OIP.uLs2Shopd4nvVilDdZXMCAHaE8&pid=Api&P=0&h=180",
        "https://www.frost.com/wp-content/uploads/2022/02/Industrial_automation.png",
        "https://tse4.mm.bing.net/th?id=OIP.8gT97DD2mi5S_vDCrQUTswAAAA&pid=Api&P=0&h=180",
        "https://www.frost.com/wp-content/uploads/2022/02/Industrial_automation.png",

    ];
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

   


    return (
        <div className="flex">
            <div className="w-3/4  p-2 ">
                <div className=" flex gap-4 m-2 bg-gray-50 rounded-lg shadow-lg border border-gray-200 ">
                    {/* Main */}
                    <div className="relative w-full max-w-2xl p-6">
                        {/* Large Image */}
                        <div className="overflow-hidden rounded-lg h-96 w-auto">
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        {/* Thumbnails */}
                        <div className="flex space-x-4 mt-4 justify-between">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-16 h-16 rounded-md cursor-pointer border-2 ${currentIndex === index ? "border-blue-500" : "border-transparent"
                                        }`}
                                    onClick={() => setCurrentIndex(index)} // Change the large image
                                />
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 p-5">
                        <div className="text-lg font-semibold text-gray-700">🛍️ Product Name</div>
                        <div className="text-sm text-gray-600">🏭 Manufacturer</div>
                        <div className="text-sm text-gray-600">📦 Model Name</div>
                        <div className="text-sm text-gray-600">📝 Description</div>
                        <div className="text-sm text-gray-600">✨ Key Features</div>
                        <div className="text-sm text-gray-600">💰 Price</div>
                        <div className="text-sm text-gray-600">📋 Availability</div>
                        <div className="text-sm text-gray-600">⭐ Reviews</div>
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
                    <TableProduct/>
                </div>

            </div>
           
            <div>
                <ProductSide />
            </div>

        </div>

    );
}

export default AddProduct;
