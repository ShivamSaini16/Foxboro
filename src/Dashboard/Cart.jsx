import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from '../Components/CardItem'; // Import CardItem component
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";


const Cart = () => {
  const cart = useSelector((state) => state?.cart?.items); // Use Redux state for cart items
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount whenever the cart changes
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  }, [cart]);

  return (
    <>
      <Header />
      <div className="w-full h-full justify-center items-center flex">
        {cart.length > 0 ? (
          <div className='flex gap-6'>
            <div>
              {cart.map((item, index) => (
                <CardItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
            <Box className='flex flex-col p-4 gap-y-7'>
              <Box>
                <Typography className="text-3xl text-green-700 font-semibold">Your Cart</Typography>
                <Typography className="text-6xl text-green-700 font-semibold">Summary</Typography>
                <Typography className="text-2xl">Total Items: {cart.length}</Typography>
              </Box>
              <Box>
                <Typography>Total Amount: ${totalAmount.toFixed(2)}</Typography>
                <Button variant="contained" color="primary" fullWidth>Check Out</Button>
              </Box>
            </Box>
          </div>
        ) : (
          <div className="text-center">
            <Typography>The cart is empty</Typography>
            <Link to='/'>
              <Button>Shop now</Button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
