// import { Button, Grid2, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";


// const cart = () => {
//   const cart = useSelector((state) => state.cart)
//   const [totalAmount,setTotalAmount] = useState(0);

// useEffect(()=>{
//   setTotalAmount(cart.reduce((acc,curr)=> acc+curr.price,0));
// },[cart])

//   return (

//     <div>
//       {
//         cart.length > 0 ?
//           (
//             <Grid2>
//               {
//                 cart.map((item, index) => {
//                   return <Carditem key={item.id} item={item} itemIndex={index} />
//                 })
//               }

//               <Grid2>
//                 <Grid2>
//                   <Typography>Your Cart</Typography>
//                   <Typography>Summary</Typography>
//                   <Typography>Total Item: {cart.length}</Typography>
//                 </Grid2>
//               </Grid2>
//               <Grid2>
//                 <Typography>Total Amount: ${totalAmount}</Typography>
//                 <Button>Check Out</Button>
//               </Grid2>
//             </Grid2>

//           ) :
//           (
//             <Grid2>
//               <Typography>The cart is empty</Typography>
//               <Link to='/'>
//                 <Button>Shop now</Button>
//               </Link>
//             </Grid2>
//           )
//       }
//     </div>
//   )


// }


import { Box, Button, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from '../Components/CardItem'; // Make sure to import this component

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);  // Ensure correct selector
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setTotalAmount(cart.reduce((acc, curr) => acc + (curr.price || 0), 0));
    }
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <Grid2 container className='bg-pink-200 '>
          <Grid2 >
            {cart.map((item, index) => (
              <CardItem key={item.id} item={item} itemIndex={index} />
            ))}
          </Grid2>
          <Box className='grid grid-flow-row auto-rows-max bg-orange-300 p-2'>
              <Box class='bg-yellow-100 inline-block w-fit h-fit'>
                <Typography class="text-3xl text-green-700 font-semibold">Your Cart</Typography>
                <Typography class="text-6xl text-green-700 font-semibold">Summary</Typography>
                <Typography class='text-2xl'>Total Items: {cart.length}</Typography>
              </Box>
            <Box class='bg-sky-100 w-fit h-fit'>
              <Typography>Total Amount: ${totalAmount}</Typography>
              <Button variant="contained" color="primary" fullWidth >Check Out</Button>
            </Box>
          </Box>

        </Grid2>
      ) : (
        <Grid2>
          <Typography>The cart is empty</Typography>
          <Link to='/'>
            <Button>Shop now</Button>
          </Link>
        </Grid2>
      )}
    </div>
  );
};

export default Cart;
