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
    toast.success("Item remove")
  }
  return (
    <>
      <Grid2 container className="p-5 gap-4 md:grid-cols-2">
        {/* Image Section */}
        <Grid2 xs={12} md={6} className="h-[180px]">
          <img src={item.image} alt="Item Image" className="h-full w-full object-cover" />
        </Grid2>

        {/* Content Section */}
        <Grid2 xs={12} md={6}>
          <Grid2 container direction="column" className="gap-4">
            {/* Title and Description */}
            <Box className="grid font-bold gap-y-2">
              <Typography className="mb-2">{item.title}</Typography>
              <Typography className="mb-4">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</Typography>
            </Box>

            {/* Price and Delete Button */}
            <Box className="flex justify-between items-center">
              <Typography className="mr-4">{item.price}</Typography>
              <div onClick={removeFromCart} className="cursor-pointer">
                <DeleteIcon />
              </div>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>

    </>
  )
}

export default CardItem
