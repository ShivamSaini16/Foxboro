import React from 'react';
import { Box, Button, Grid2, TextField } from '@mui/material';
import ImageSlider from './ImageSilder';

function SideBar() {
  return (
    <Box>
      <Grid2 container sx={{ width: '100%' }}>
        {/* Sidebar container with dynamic width */}
        <Grid2 item xs={12} py={2} className="bg-gray-50" sx={{ width: '100%' }}>
          <div id="accordion-collapse" data-accordion="collapse" className="w-fit h-dvh">
            {/* Category Filter Section */}
            <h2 id="accordion-collapse-heading-category" className="w-72">
              <div className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl gap-3">
                <span>Category</span>
              </div>
            </h2>
            <div
              id="accordion-collapse-body-category"
              aria-labelledby="accordion-collapse-heading-category"
              className="h-60 w-72 overflow-y-auto" // Fixed height with overflow for scroll
            >
              <div className="p-2 border h-56 border-b-0 bg-white">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" /> {/* Increased checkbox size */}
                  <span className="text-gray-500 text-lg">Men's Clothing</span> {/* Increased text size */}
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                  <span className="text-gray-500 text-lg">Women's Clothing</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                  <span className="text-gray-500 text-lg">Accessories</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                  <span className="text-gray-500 text-lg">Cable</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                  <span className="text-gray-500 text-lg">IOT</span>
                </label>
              </div>

            </div>

            {/* Sub-Category Filter Section */}
            <h2 id="accordion-collapse-heading-brand">
              <div className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 gap-3">
                <span>Sub-Category</span>
              </div>
            </h2>
            <div className="p-2 border border-b-0 bg-white h-56 w-72 overflow-y-auto"> {/* Fixed height for scroll */}
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">Brand A</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">Brand B</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">Brand C</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">Brand D</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">Brand E</span>
              </label>
              {/* Add more labels here as needed */}
            </div>

            {/* Brand Filter Section */}
            <h2>
              <div className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 gap-3">
                <span>Brand</span>
              </div>
            </h2>
            <div
              id="accordion-collapse-body-discount"
              aria-labelledby="accordion-collapse-heading-discount"
              className="p-2 border border-b-0 bg-white h-56 w-72 overflow-y-auto" // Fixed height with overflow for scroll
            >
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">10% or more</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">20% or more</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">30% or more</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">40% or more</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                <span className="text-gray-500 text-lg">40% or more</span>
              </label>
            </div>

            <div>
              <div className='h-48 w-72 mt-9'>
                <img src="noData.jpg" alt="no image" style={{ height: '100%', width: '100%' }} />
              </div>
              <Grid2 container sx={{ display: 'grid', gap: 2, mt: 2 }}>
                <TextField size="small" label="Name" />
                <TextField size="small" label="Email" />
                <TextField size="small" label="Phone" />
                <TextField size="small" label="Description" multiline rows={4} />
                <Button variant="contained">Submit</Button>
              </Grid2>
            </div>
            <div className=" h-48 w-72 mt-4">
              <img src="credit.jpg" alt="no image" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="h-64 w-72 bg-cover bg-center bg-white  rounded-lg shadow-md p-4">

              <div className="flex items-center space-x-2 mb-2  p-2 rounded">
                <span className="text-blue-500 text-4xl">*</span>
                <p className="text-gray-700 font-bold text-lg">Pay only 30% & Balance on Delivery</p>
              </div>
              <div className="flex items-center space-x-2 mb-2  p-2 rounded">
                <span className="text-blue-500 text-4xl">*</span>
                <p className="text-gray-700 font-bold text-lg">Credit Available up to 45 days</p>
              </div>
              <div className="flex items-center space-x-2  p-2 rounded">
                <span className="text-blue-500 text-4xl">*</span>
                <p className="text-gray-700 font-bold text-lg">EMI Options</p>
              </div>
            </div>

            <div className="flex flex-col w-72 mt-5 bg-gray-50">
              {/* Promotional Video Section */}
              <div className="w-62 h-62 bg-white shadow-md mb-3">
                <h2 className="text-lg font-semibold pl-1 text-gray-600">Promotional Video</h2>
                <p className="text-gray-500 pl-1 mb-2">Company Name Sensor China</p>
                <div className="h-full w-full">
                  <video
                    src="sensor.mp4"
                    controls
                    className="h-full w-full rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-72 h-64 items-end justify-end ">
                    <ImageSlider/>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default SideBar;