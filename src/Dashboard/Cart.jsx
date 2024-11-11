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
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  const cart = useSelector((state) => state?.cart?.items);  // Ensure correct selector
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setTotalAmount(cart.reduce((acc, curr) => acc + (curr.price || 0), 0));
    }
  }, [cart]);

  return (
    <>
      <Header />
      <div className="w-full h-full justify-center items-center flex">
        {cart.length > 0 ? (
          <div className=' flex gap-6'>
            <Grid2 size={{ lg: 6 }}>
              {cart.map((item, index) => (
                <CardItem key={item.id} item={item} itemIndex={index} />
              ))}
            </Grid2>
            <Box className='flex flex-col auto-rows-max p-4 gap-y-7 justify-between'>
              <Box class='inline-block w-fit h-fit'>
                <Typography class="text-3xl text-green-700 font-semibold">Your Cart</Typography>
                <Typography class="text-6xl text-green-700 font-semibold">Summary</Typography>
                <Typography class='text-2xl'>Total Items: {cart.length}</Typography>
              </Box>
              <Box class=' h-fit bottom-0 w-full '>
                <Typography >Total Amount: ${totalAmount}</Typography>
                <Button variant="contained" color="primary" fullWidth >Check Out</Button>
              </Box>
            </Box>
          </div>
        ) : (
          <Grid2>
            <Typography>The cart is empty</Typography>
            <Link to='/'>
              <Button>Shop now</Button>
            </Link>
          </Grid2>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
