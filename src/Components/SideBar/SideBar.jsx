import React from 'react';
import { Box, Button, Grid2, TextField } from '@mui/material';
import ImageSlider from './ImageSilder';

function SideBar() {
  return (
    <Box>
      <Grid2 container className='w-full h-full '>
        {/* Sidebar container with dynamic width */}
        <Grid2 item xs={12}  className="bg-gray-50 h-full w-full" >
          <div id="accordion-collapse" data-accordion="collapse" className="w-full h-full">
            {/* Category Filter Section */}
            {/* Category Filter Section */}
            <h2 id="accordion-collapse-heading-category" className="w-full">
              <div className="flex items-center justify-between w-full p-4 font-medium text-gray-800 bg-blue-50 border border-gray-300 rounded-t-lg gap-3 hover:bg-blue-100 transition duration-300">
                <span className="text-lg">Category</span>
              </div>
            </h2>
            <div
              id="accordion-collapse-body-category"
              aria-labelledby="accordion-collapse-heading-category"
              className="h-60 w-full overflow-y-auto bg-white border border-gray-300 rounded-b-lg shadow-sm"
            >
              <div className="p-4 space-y-3">
                <label className="flex items-center space-x-3 hover:text-blue-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700 text-base">Men's Clothing</span>
                </label>
                <label className="flex items-center space-x-3 hover:text-blue-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700 text-base">Women's Clothing</span>
                </label>
                <label className="flex items-center space-x-3 hover:text-blue-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700 text-base">Accessories</span>
                </label>
                <label className="flex items-center space-x-3 hover:text-blue-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700 text-base">Cable</span>
                </label>
                <label className="flex items-center space-x-3 hover:text-blue-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700 text-base">IOT</span>
                </label>
              </div>
            </div>

            {/* Sub-Category Filter Section */}
            <h2 id="accordion-collapse-heading-subcategory">
              <div className="flex items-center justify-between w-full p-4 font-medium text-gray-800 bg-green-50 border border-gray-300 rounded-t-lg gap-3 hover:bg-green-100 transition duration-300">
                <span className="text-lg">Sub-Category</span>
              </div>
            </h2>
            <div
              className="p-4 border space-y-3 border-gray-300 bg-white h-56 w-full overflow-y-auto rounded-b-lg shadow-sm"
            >
              <label className="flex items-center space-x-3 hover:text-green-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded" />
                <span className="text-gray-700 text-base">Brand A</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-green-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded" />
                <span className="text-gray-700 text-base">Brand B</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-green-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded" />
                <span className="text-gray-700 text-base">Brand C</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-green-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded" />
                <span className="text-gray-700 text-base">Brand D</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-green-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded" />
                <span className="text-gray-700 text-base">Brand E</span>
              </label>
            </div>

            {/* Brand Filter Section */}
            <h2 id="accordion-collapse-heading-brand">
              <div className="flex items-center justify-between w-full p-4 font-medium text-gray-800 bg-purple-50 border border-gray-300 rounded-t-lg gap-3 hover:bg-purple-100 transition duration-300">
                <span className="text-lg">Brand</span>
              </div>
            </h2>
            <div
              id="accordion-collapse-body-discount"
              aria-labelledby="accordion-collapse-heading-brand"
              className="p-4 border space-y-3 border-gray-300 bg-white h-56 w-full overflow-y-auto rounded-b-lg shadow-sm"
            >
              <label className="flex items-center space-x-3 hover:text-purple-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded" />
                <span className="text-gray-700 text-base">10% or more</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-purple-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded" />
                <span className="text-gray-700 text-base">20% or more</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-purple-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded" />
                <span className="text-gray-700 text-base">30% or more</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-purple-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded" />
                <span className="text-gray-700 text-base">40% or more</span>
              </label>
              <label className="flex items-center space-x-3 hover:text-purple-600">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded" />
                <span className="text-gray-700 text-base">50% or more</span>
              </label>
            </div>


            <div>
              <div className='h-48 w-full mt-9'>
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
            <div className=" h-48 w-full mt-4">
              <img src="credit.jpg" alt="no image" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="h-56 w-full bg-cover bg-center bg-white  rounded-lg shadow-md p-4">

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

            <div className="flex flex-col w-full mt-5 bg-gray-50">
              {/* Promotional Video Section */}
              <div className="w-full h-62 bg-white shadow-md mb-3">
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
            <div className="flex flex-col w-full h-64 items-end justify-end ">
              <ImageSlider />
            </div>
          </div>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default SideBar;
