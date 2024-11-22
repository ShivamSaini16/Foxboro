import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageSlider from '../../Components/SideBar/ImageSilder';

function ProductSide() {

    const discountData = [
        { id: 1, quantity: "20-49", price: "₹25.69" },
        { id: 2, quantity: "50-99", price: "₹24.82" },
        { id: 3, quantity: "100-199", price: "₹24.39" },
        { id: 4, quantity: "200-more", price: "₹23.52" },
    ];

    const[ quantity, setQuantity] = useState(10);

    const increaseQuantity = () => {
        setQuantity((preQuantity) => preQuantity + 10);
    }

    const decreaseQuantity = () => {
        setQuantity((preQuantity) => (preQuantity > 10 ? preQuantity - 10 : 10))
    }

    return (
        <div>
            <div className="flex flex-col h-full gap-2 m-4">
                {/* First Box  */}
                <div className="flex flex-col w-96 h-full bg-gray-50 rounded-lg shadow-lg border border-gray-200 p-4 space-y-4">
                    {/* Price Section */}
                    <div className="space-y-4 ">
                        <p className="text-sm font-bold text-gray-500">₹270 <span className="text-sm text-gray-600">(Incl. of all taxes)</span></p>
                        <p className="text-lg text-gray-800 font-extrabold">₹229 + 18% GST</p>
                        <div className='flex gap-3'>
                            <p className="text-sm text-gray-400 line-through">MRP ₹295</p>
                            <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-500 px-4 py-2 rounded-md">
                                <p className="text-sm text-orange-600 font-medium">8.47% OFF</p>
                            </div>
                        </div>
                    </div>

                    {/* Quantity Section */}
                    <div className="space-y-2">
                        <p className="text-sm text-gray-700 font-medium">Quantity</p>
                        <div className="flex items-center space-x-2">
                            <button onClick={decreaseQuantity} className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-bold hover:bg-gray-300">-</button>
                            <span className="text-xl font-semibold text-gray-800">{quantity}</span>
                            <button onClick={increaseQuantity} className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-bold hover:bg-gray-300">+</button>
                        </div>
                        <p className="text-sm text-gray-500">Minimum Order Quantity - 10 Pieces</p>
                    </div>
                </div>
                {/* Second Box */}
                <div className="w-96 mx-auto  bg-gray-50 rounded-lg shadow-lg border border-gray-200">
                    {/* Heading */}
                    <h2 className="text-lg font-bold text-gray-800 mb-4 p-2">
                        Bulk Quantity Discounts!!
                    </h2>

                    {/* Table */}
                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-green-200 ">
                                <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                                    Select
                                </th>
                                <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                                    Quantity
                                </th>
                                <th className="border border-gray-300 p-2 text-left text-sm font-medium text-gray-600">
                                    Discounted Price per Piece
                                    <span className="block text-xs text-gray-500">(Incl. of all taxes)</span>
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {discountData.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
                                        />
                                    </td>
                                    <td className="border border-gray-300 p-2 text-sm text-gray-700">
                                        {row.quantity}
                                    </td>
                                    <td className="border border-gray-300 p-2 text-sm text-gray-700">
                                        {row.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Button */}
                <div className="flex  w-96 h-full gap-2">
                    <button className='w-full bg-orange-500 text-white rounded-lg border p-1 text-lg font-bold'>Add To Cart</button>
                    <button className='w-full bg-blue-900 text-white rounded-lg border p-1 text-lg font-bold'>Buy Now</button>
                </div>
                {/* Third Box */}
                <div className="flex flex-col w-96 h-72 mt-5 bg-gray-50 rounded-lg shadow-lg border border-gray-200 ">
                    {/* <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-4 p-2">
                            <LocationOnIcon />   Check Delivery Details
                        </h2>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md p-2 m-2 focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                            type="text"
                            placeholder="Enter your text here"
                            className="flex-grow outline-none text-gray-700 placeholder-gray-400 "
                        />
                        <button
                            type="button"
                            className="ml-2 bg-orange-500 text-white p-1 rounded-lg  hover:bg-green-700 focus:ring-2 focus:ring-green-400"
                        >
                            Check
                        </button>
                    </div>
                    <div className='flex flex-col space-y-4 border-2 p-2 m-2 rounded-lg'>
                        <div className='flex w-full gap-8'>
                            <button className='bg-green-600 text-white p-1 rounded-lg w-40 font-bold'>PREPAID</button>
                            <p className=' flex justify-center w-40 font-bold '>Available</p>
                        </div>
                        <div className='flex w-full gap-8'>
                            <button className=' border-2 text-black p-1 rounded-lg w-40 font-bold'>PART COD</button>
                            <p className=' flex justify-center w-40 font-bold '>Unavailable</p>
                        </div>
                        <div className='flex w-full gap-8'>
                            <button className='bg-green-600 text-white p-1 rounded-lg w-40 font-bold'>COD</button>
                            <p className=' flex justify-center w-40 font-bold'>Available</p>
                        </div>
                        <div className='flex w-full gap-8'>
                            <button className=' border-2 text-black p-1 rounded-lg w-40 h-9 font-bold'>RETURN</button>
                            <p className=' flex justify-center w-40 font-bold'>Unavailable
                            Return period : 7 days</p>
                        </div>
                    </div> */}
                    <h3 className='text-md font-bold text-gray-800 mb-4 p-2'>Need Assistance ? Connect with aproduct expert</h3>

                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex gap-4'>
                            <label className='w-14 text-right font-medium text-gray-700'>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your Name number"
                                className=' flex-1 border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        </div>
                        <div className='flex gap-4'>
                            <label className=' w-14 text-right font-medium text-gray-700'>Mobile</label>
                            <input
                                type="tel"
                                placeholder="Enter your Mobile number"
                                className=' flex-1 border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        </div>
                        <div className='flex gap-4'>
                            <label className=' w-14 text-right font-medium text-gray-700'>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email number"
                                className='flex-1 border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        </div>
                    </div>

                    <div className='flex  justify-around mt-3'>
                        <div className='flex gap-1'>
                            <input type="checkbox" />
                            <h1 className='font-bold text-gray-700'>indivusal</h1>
                        </div>
                        <div className='flex gap-1'>
                            <input type="checkbox" />
                            <h2 className='font-bold text-gray-700'>institution</h2>
                        </div>
                    </div>
                    <div className=' flex mt-4 gap-2  '>
                        <p className='pl-3  text-gray-700 '>Average Wait: less than 10 minutes</p>
                        <button className='  bg-blue-900 text-white rounded-lg border font-bold outline pl-9 pr-9 pb-1 pt-1'>Send</button>
                    </div>

                    <div className="flex flex-col w-full mt-6   bg-gray-50 rounded-lg shadow-lg border border-gray-200">
                        {/* Promotional Video Section */}
                           <ImageSlider/>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ProductSide
