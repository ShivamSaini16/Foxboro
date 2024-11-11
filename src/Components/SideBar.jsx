import React from 'react';
import { Box, Grid2 } from '@mui/material';

function SideBar() {
  return (
    <Box>
      <Grid2 container spacing={0} pt={3} sx={{ width: '120%' }}>
        {/* Sidebar container with dynamic width */}
        <Grid2 item xs={12} py={2} className="bg-gray-50"  sx={{ width: '120%' }}>
          <div id="accordion-collapse" data-accordion="collapse" className='w-fit h-dvh '>
            {/* Category Filter Section */}
            <h2 id="accordion-collapse-heading-category" className='w-72 '>
              <div className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl gap-3">
                <span>Category</span>
              </div>
            </h2>
            <div id="accordion-collapse-body-category" aria-labelledby="accordion-collapse-heading-category" className=' h-fit w-72'>
              <div className="p-5 border border-b-0 border-gray-200">
                
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">Men's Clothing</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">Women's Clothing</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">Accessories</span>
                </label>
              </div>
            </div>

            {/* Brand Filter Section */}
            <h2 id="accordion-collapse-heading-brand">
              <div className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 gap-3">
                <span>Sub-Category</span>
              </div>
            </h2>
            <div id="accordion-collapse-body-brand" aria-labelledby="accordion-collapse-heading-brand">
              <div className="p-5 border border-b-0 border-gray-200">
                
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">Brand A</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">Brand B</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">Brand C</span>
                </label>
              </div>
            </div>

            {/* Discount Filter Section */}
            <h2 >
              <div className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 gap-3">
                <span>Brand</span>
              </div>
            </h2>
            <div id="accordion-collapse-body-discount" aria-labelledby="accordion-collapse-heading-discount">
              <div className="p-5 border border-b-0 border-gray-200">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">10% or more</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">20% or more</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-500">30% or more</span>
                </label>
              </div>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </Box>


  );
}

export default SideBar;
