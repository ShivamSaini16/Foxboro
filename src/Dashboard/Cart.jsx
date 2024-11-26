import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from '../Components/CardItem'; // Import CardItem component
import PageContainer from "../Components/HOC/PageContainer";


const Cart = () => {
  const cart = useSelector((state) => state?.cart?.items); // Use Redux state for cart items
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount whenever the cart changes
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  }, [cart]);

  return (
    <PageContainer showheader="true" showfooter="true">
      <div className="flex items-center justify-center min-h-screen">
        <div className="md:w-3/4 lg:w-2/3 bg-gray-50  shadow-lg border border-gray-200">
          {cart.length > 0 ? (
            <div className="gap-6">
              <div className="w-full">
                <div className="flex justify-between p-2">
                  <p className="text-3xl font-bold ">Your Cart</p>
                  <Link to={'/'}>
                    <p className="font-bold text-base">Continue Shopping</p>
                  </Link>
                </div>
                <div className="flex justify-between p-2 pr-3">
                  <p className="font-bold text-base">PRODUCT</p>
                  <p className="font-bold text-base">QUANTITY</p>
                  <p className="font-bold text-base">TOTAL</p>
                </div>
              </div>
              <div>
                {cart.map((item, index) => (
                  <CardItem key={item.id} item={item} itemIndex={index} />
                ))}
              </div>
              <Box className="flex flex-col justify-end p-2">
                <Box className="flex flex-col justify-end items-end gap-4">
                  <p className="font-bold text-2xl">Total Items: {cart.length}</p>
                  <p className="font-bold text-3xl">Subtotal: ${totalAmount.toFixed(2)}</p>
                  <Link to={'/checkout'}>
                    <button className="w-80 bg-black text-white font-bold p-1">Check Out</button>
                  </Link>
                </Box>
              </Box>
              <div className="flex justify-end items-end p-2">
                <div className="flex justify-end items-end h-10 w-64 gap-5">
                  <img src="paypal.jpg" className="w-full h-full object-cover" />
                  <img src="paytm.png" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Typography>The cart is empty</Typography>
              <Link to="/">
                <Button>Shop now</Button>
              </Link>
            </div>

          )}
        </div>
      </div>
      <hr className="border" />
    </PageContainer>

  );
};

export default Cart;
