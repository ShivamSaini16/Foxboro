import React from 'react';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove, increase, decrease } from '../Redux/slices/CounterSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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

<div className="p-4 gap-6 flex flex-wrap justify-between items-center bg-gray-50 rounded-lg shadow-md border border-gray-200">
  {/* Image and Content Section */}
  <div className=" w-full max-w-[410px] flex flex-1 gap-4  items-center">
    {/* Image Section */}
    <div className="h-[90px] w-[90px] flex flex-shrink-0 justify-center items-center">
      <img
        src={item.image}
        alt="Item"
        className="h-full  object-contain rounded-md border border-gray-300"
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-center  gap-2">
      <h1 className="font-bold text-lg">{item.title.split(' ').slice(0, 4).join(' ') + '...'}</h1>
      <p className="text-sm text-gray-600 break-words">
        {item.description.split(' ').slice(0, 5).join(' ') + '...'}
      </p>
      <Typography className="text-green-600 font-medium">${item.price}</Typography>
    </div>
  </div>

  {/* Quantity, Delete, and Total Price Section */}
  <div className="flex  justify-between items-center  gap-6 w-[55%]">
    {/* Quantity Controls */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 border-2 border-solid border-black bg-white rounded-md px-2 py-1">
        <button
          className="px-3 py-1 bg-white text-black rounded-md hover:bg-gray-100"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="px-3 py-1 bg-white text-black rounded-md">
          {item.quantity}
        </span>
        <button
          className="px-3 py-1 bg-white text-black rounded-md hover:bg-gray-100"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      {/* Delete Button */}
      <div
        onClick={removeFromCart}
        className="cursor-pointer text-red-600 hover:text-red-800"
      >
        <DeleteOutlineIcon />
      </div>
    </div>

    {/* Total Price */}
    <div className="text-lg font-semibold text-gray-800">
      ${(item.price * item.quantity).toFixed(2)}
    </div>
  </div>
</div>

      {/* <hr className="border-t border-blue-900 my-4" /> */}
    </>
  );
}

export default CardItem;
