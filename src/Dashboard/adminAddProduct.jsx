import React from 'react'

function adminAddProduct() {
    return (
        <div>
            <div className='p-20 flex flex-col space-y-2 '>
                <div className='flex space-x-2 space-y-2'>
                    <p className='text-4xl font-bold'> Products </p>
                    <p className='text-lg'> Add New  Product </p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-3/4'>
                    <div className="flex justify-between gap-2 pt-5">
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Upload an Image</label>
                            <input
                            id='file-upload'
                                type="file"
                                className="border-2 border-gray-300 w-72 p-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Product Name</label>
                            <input
                                type="text"
                                placeholder="Enter product name"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Price</label>
                            <input
                                type="text"
                                placeholder="Enter price"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Quantity</label>
                            <input
                                type="text"
                                placeholder="Enter quantity"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 pt-5">
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Model Number</label>
                            <input
                                type="text"
                                placeholder="Model Number"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2"> Manufacturer</label>
                            <input
                                type="text"
                                placeholder="Enter  Manufacturer name"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2"> Key Features</label>
                            <input
                                type="text"
                                placeholder="Enter  Key Features"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Type of Product</label>
                            <input
                                type="text"
                                placeholder="Enter Type of Product"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 pt-5">
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Application</label>
                            <input
                                type="text"
                                placeholder="Enter Application"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Material</label>
                            <input
                                type="text"
                                placeholder="Enter Material"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Flow Rate</label>
                            <input
                                type="text"
                                placeholder="Enter Flow Rate"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Pattern Width</label>
                            <input
                                type="text"
                                placeholder="Enter Pattern Width"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 pt-5">
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Package Contains</label>
                            <input
                                type="text"
                                placeholder="Enter Package Contains"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Country of Origin</label>
                            <input
                                type="text"
                                placeholder="Enter Country of Origin"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2"> Manufacturer/Importer</label>
                            <input
                                type="text"
                                placeholder="Enter Name of Manufacturer/Importer"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl font-semibold mb-2">Warranty Duration</label>
                            <input
                                type="text"
                                placeholder="Enter Warranty Duration"
                                className="border-2 border-gray-300 w-72 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default adminAddProduct
