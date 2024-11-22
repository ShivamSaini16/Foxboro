import React from 'react';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove, increase, decrease } from '../Redux/slices/CounterSlice';

function CardItem({ item }) {
  const dispatch = useDispatch();

  // Remove item from cart
  const removeFromCart = () => {
    dispatch(remove(item.id)); // Dispatch remove action
    toast.error('Item removed');
  };

  // Increase quantity
  const increaseQuantity = () => {
    dispatch(increase(item.id)); // Dispatch increase action
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decrease(item.id)); // Dispatch decrease action
    } else {
      toast.error('Minimum quantity is 1');
    }
  };

  return (
    <>
      <div className="p-5 gap-10 flex">
        {/* Image Section */}
        <div className="h-[180px] w-[25%] bg-white flex justify-center items-center">
          <img src={item.image} alt="Item" className="h-full w-full object-contain" />
        </div>

        <div className="gap-4 columns-1 w-[35vh]">
          {/* Title and Description */}
          <span className="flex flex-col gap-3">
            <h1 className="font-bold">{item.title}</h1>
            <p className="mb-4 break whitespace-normals">
              {item.description.split(' ').slice(0, 10).join(' ') + '...'}
            </p>
          </span>

          {/* Price and Delete Button */}
          <span className="flex justify-between items-center p-3">
            <Typography className="mr-4" color="green">
              ${item.price}
            </Typography>
            <div onClick={removeFromCart} className="cursor-pointer">
              <DeleteIcon sx={{ color: 'red' }} />
            </div>
          </span>

          {/* Quantity Control */}
          <div className="flex items-center gap-4 mt-2">
            <Typography>Quantity:</Typography>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-3 py-1 bg-gray-200 rounded-md">{item.quantity}</span>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-2 text-lg font-semibold">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
      <hr className="border-t border-blue-900 my-4" />
    </>
  );
}

export default CardItem;
