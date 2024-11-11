import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../Redux/slices/CounterSlice'

function CardItem({ item, index }) {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove")
  }
  return (
    <>
      <div className="p-5 gap-10 flex" bgcolor={'yellow'}>
        {/* Image Section */}

        <div className="h-[180px] w-[25%] bg-white flex justify-center items-center ">
          <img src={item.image} alt="Item Image" className="h-full w-full object-contain" />
        </div>

        <div className="gap-4 columns-1 w-[35vh] ">
          {/* Title and Description */}
          <span className="flex flex-col gap-3">
            <h1 className="font-bold">{item.title}</h1>
            <p className="mb-4 break whitespace-normals">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
          </span>

          {/* Price and Delete Button */}
          <span className="flex justify-between items-center p-3">
            <Typography className="mr-4 " color='green'>${item.price}</Typography>
            <div onClick={removeFromCart} className="cursor-pointer">
              <DeleteIcon sx={{color:'red'}}/>
            </div>
          </span>
        </div>
      </div>
      <hr class="border-t border-blue-900 my-4" />

    </>
  )
}

export default CardItem
