import React, { useState } from "react";
import LockIcon from '@mui/icons-material/Lock';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

function CheckOut() {
    const cart = useSelector((state) => state?.cart?.items); // Use Redux state for cart items

    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);


    return (
        <>
            <div className="flex flex-col justify-center items-center ">
                <div className="w-2/3 h-full p-4 bg-gray-100">
                    {/* Secure Checkout Header */}
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <div className="flex items-center">
                            <LockIcon />
                            <h1 className="text-xl font-semibold">Secure Checkout</h1>
                        </div>
                        <div className="w-36 h-12">
                            <img
                                src="paypal.jpg"
                                alt="PayPal"
                                className=" w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Delivery Header */}
                    <h2 className="text-lg font-semibold mb-4">Delivery</h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Address Fields */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium mb-1">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Address"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="address2" className="block text-sm font-medium mb-1">
                                Address 2
                            </label>
                            <input
                                type="text"
                                id="address2"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Apartment, suite, etc. (optional)"
                            />
                        </div>
                        <div>
                            <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                id="postalCode"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Postal Code"
                            />
                        </div>
                    </div>

                    {/* Country and City Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium mb-1">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Country"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="City"
                            />
                        </div>
                    </div>

                    {/* Region and Phone Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="region" className="block text-sm font-medium mb-1">
                                Region (Optional)
                            </label>
                            <input
                                type="text"
                                id="region"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Region"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="flex">
                            <input type="checkbox" />
                            <div className="w-32 h-24">
                                <img src="paypal.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" />
                            <div className="w-32 h-24">
                                <img src="paytm.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" />
                            <div className="w-32 h-24">
                                <img src="cash.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className=" flex p-4">
                        <div className="w-1/2 flex gap-3">
                            <p className=" w-24 flex flex-shrink-0 font-bold text-sm justify-center items-center ">Card Number</p>
                            <input
                                type="text"
                                id="Card"
                                className=" p-2 border border-gray-300 rounded-md w-full  "
                                placeholder="Card Number"

                            />
                        </div>
                        <div className="w-1/2 flex gap-3">
                            <p className="w-24 flex flex-shrink-0 font-bold text-sm justify-center items-center">Card Holder</p>
                            <input
                                type="text"
                                id="Card"
                                className=" p-2 border border-gray-300 rounded-md w-full"
                                placeholder="Card Holder"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className=" w-1/2 flex   md:flex-row gap-2 p-4">
                            <div className="w-1/6">
                                <label className="block font-bold text-base ">Expiry</label>
                            </div>
                            {/* Month Dropdown */}
                            <div className="w-full md:w-1/2">
                                <select
                                    id="month"
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="" disabled>
                                        Month
                                    </option>
                                    {months.map((month, index) => (
                                        <option key={index} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Year Dropdown */}
                            <div className="w-full md:w-1/2">
                                <select
                                    id="year"
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="" disabled>
                                        Year
                                    </option>
                                    {years.map((year, index) => (
                                        <option key={index} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className=" w-1/2 flex md:flex-row gap-2 p-4">
                            <p className="w-24 flex flex-shrink-0 font-bold text-sm justify-center items-center">CVC</p>
                            <input
                                type="text"
                                id="Card"
                                className=" p-2 border border-gray-300 rounded-md w-full  "
                                placeholder="CVC"

                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center p-4">
                        <div className="w-2/3 space-y-4">
                            {/* Summary Section */}
                            <div className="w-full bg-gray-100 rounded-md border border-gray-300 p-4 shadow-md">
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-700 font-medium">Subtotal</p>
                                    <p className="text-gray-800 font-bold">$100.00</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-700 font-medium">GST</p>
                                    <p className="text-gray-800 font-bold">$10.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-700 font-medium">Delivery Charge</p>
                                    <p className="text-gray-800 font-bold">$5.00</p>
                                </div>
                            </div>

                            {/* Total Amount Section */}
                            <div className="w-full bg-gray-100 rounded-md border border-gray-300 p-4 shadow-md">
                                <p className="text-lg font-bold text-gray-900">Total Amount: $115.00</p>
                            </div>

                            {/* Confirm Payment Button */}
                            <div className="w-full">
                                <button className="w-full py-3 bg-pink-500 text-white font-semibold rounded-md shadow hover:bg-pink-600 transition">
                                    CONFIRM PAYMENT
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="flex flex-col bg-yellow-100 w-64">
                    <div className="flex">
                        <ShoppingCartIcon />
                        <p className="text-lg font-bold">Your Order</p>
                    </div>

                    <div>
                        <p className="font-bold text-2xl">Total Items: {cart.length}</p>
                    </div>

                </div> */}

            </div>

        </>

    );
}

export default CheckOut;
