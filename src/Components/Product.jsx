import { Button, Grid2, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { add, remove } from '../Redux/slices/CounterSlice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { showProducts } from '../Redux/api/service'; // Ensure this is the correct API function

function Product({ post }) {
  const cart = useSelector((state) => state.cart.items); // Access cart items
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // Fetch product details based on `id` when in details view
  useEffect(() => {
    
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await showProducts(id);
          setProduct(response); // Assuming response contains the product directly
          setLoading(false);
        } catch (err) {
          setError('Error fetching product details');
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

 
  // Handlers for cart actions
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post._id));
    toast.error('Item removed from Cart');
  };

  const isInCart = cart.some((p) => p._id === post._id);

  // Navigate to product details page
  const handleImageClick = () => {
    navigate(`/AddProduct/${post._id}`);
  };

  if (id && loading) return <div>Loading...</div>;
  else
  return (
    <div className='flex flex-col items-center justify-between *
      hover:scale-110 transition duration-100 ease-in shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
      gap-2 mt-10 rounded-xl border-4 bg-white'>
      
      <div className='w-full p-0'>
        <Grid2 bgcolor={'orange'} className='h-fit w-fit rounded-r-md p-1'>
          <Typography color='black' gap={1}>
            <LocalShippingIcon /> Ships within 24 hours
          </Typography>
        </Grid2>
      </div>

      <Grid2 className='h-[180px] pt-2 cursor-pointer' onClick={handleImageClick}>
        <img src={post.image[0]} alt={post.manufacturer.name} className='h-full w-full' />
      </Grid2>

      <Grid2 item sx={{ width: '100%', pl: 2 }}>
        <Typography variant="h6" className='text-gray-700 font-semibold text-lg text-left truncate w-50 mt-1'>
          {post.name}
        </Typography>
      </Grid2>
      <Grid2 sx={{ width: '100%', pl: 2 }}>
        <Typography className='w-41 text-gray-400 font-normal text-[10px]'>
          {post.shortDescription.split(" ").slice(0, 10).join(" ") + "..."}
        </Typography>
      </Grid2>
      <Grid2 item sx={{ width: '100%', pl: 2 }}>
        <Typography variant='h5' className='text-green-400 font-semibold'>
          $ {post.price}
        </Typography>
      </Grid2>
      <Grid2 className='flex gap-x-3 p-2'>
        <Button
          variant='outlined'
          className='text-white pr-6 pl-6 pt-2 py-2 rounded-lg border-blue-900 bg-blue-900 hover:bg-orange-500 hover:text-white transition duration-100 ease-in'>
          Buy Now
        </Button>
        <Grid2>
          {isInCart ? (
            <Button
              onClick={removeFromCart}
              variant="outlined"
              className='text-orange-500 border-orange-500 border-2 pr-4 pl-4 pt-2 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out'>
              Remove Cart
            </Button>
          ) : (
            <Button
              onClick={addToCart}
              variant="outlined"
              className='text-orange-500 border-orange-500 border-2 pr-4 pl-4 pt-2 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out'>
              Add To Cart
            </Button>
          )}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Product;
