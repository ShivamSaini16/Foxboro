
// import { Button, Grid2, Typography } from '@mui/material';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import {add , remove} from '../Redux/slices/CounterSlice'

// function Product({ post }) {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

// const addToCart = () => {
//   dispatch(add(post));
//   toast.success("Item add to Cart")
// }

// const removeFromCart = () => {
//   dispatch(remove(post.id));
//   toast.success('Item added to Cart')
// }

//   return (
//     <div>
//       <Grid2 container spacing={2}>
//         <Grid2 item xs={12}>
//           <Typography variant="h6">{post.title}</Typography>
//         </Grid2>
//         <Grid2 item xs={12}>
//           <Typography variant="body1">{post.description}</Typography>
//         </Grid2>
//         <Grid2 item xs={12}>
//           <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
//         </Grid2>
//         <Grid2 item xs={12}>
//           {
//             cart.some((p) => p.id == post.id ?
//               ( <Button onClick={removeFromCart}>
//                 Remove Item
//               </Button>):
//               ( <Button onClick={addToCart}>
//                 Add to Cart
//               </Button>)
//       )
//           }
//         </Grid2>
//       </Grid2>
//     </div>
//   );
// }

// export default Product;



import { Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add, remove } from '../Redux/slices/CounterSlice';

function Product({ post }) {
  // Access the 'items' array inside cart
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item removed from Cart');
  };

  return (
    <div className='flex flex-col items-center justify-between *
    hover:scale-110 transition duration-100 ease-in shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
    gap-2 p-4 mt-10 rounded-xl outline'>
      <Grid2 className='h-[180px]'>
        <img src={post.image} alt={post.title} className='h-full w-full' />
      </Grid2>
      <Grid2 item >
        <Typography variant="h6" className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</Typography>
      </Grid2>
      <Grid2 >
        <Typography variant="body1" className='w-40 text-gray-400 font-normal text-[10px] '>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</Typography>
      </Grid2>

      <Grid2 item >
        <Typography className='text-green-400 font-semibold'>$ {post.price}</Typography>
      </Grid2>
      <Grid2 className='flex gap-x-4'>
        <Button variant='outlined' className='text-gray-700 border-4 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-100 ease-in' >Buy</Button>
        <Grid2>
          {cart.some((p) => p.id === post.id) ? (
            <Button onClick={removeFromCart} variant='outlined' className='text-gray-700 border-4 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-100 ease-in'>Remove Cart</Button>
          ) : (
            <Button onClick={addToCart} variant='outlined' className='text-gray-700 border-4 border-gray-700 rounded-full  hover:bg-gray-700 hover:text-white transition duration-100 ease-in'>Add Cart</Button>
          )}
        </Grid2>
      </Grid2>

    </div>
  );
}

export default Product;
