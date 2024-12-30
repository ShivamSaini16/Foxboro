import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./Dashboard/Home"));
const Login = lazy(() => import("./AuthCycle/Login"));
const Signup = lazy(() => import("./AuthCycle/Signup"))
const Cart = lazy(() => import("./Dashboard/Cart"))
const SideBar = lazy(() => import("./Components/SideBar/SideBar"))
const Banner = lazy(() => import("./Components/Banner"))
const AddProduct = lazy(() => import("./Dashboard/ProductDetail/AddProduct"))
const CheckOut = lazy(() => import("./Dashboard/CheckOut"))
const ForgotPwd = lazy(() => import("./AuthCycle/ForgotPwd"))
const AdminAddProduct = lazy(() => import("./Dashboard/adminAddProduct"))
const AdminSidebar = lazy(() => import("./Components/AdminSidebar"))
const AdminHome = lazy(() => import("../src/AdminDasboard/AdminHome"))
const Customer = lazy(() => import("../src/AdminDasboard/Customers"))
const Enquiry = lazy(() => import("../src/AdminDasboard/Enquiry"))
const Order = lazy(() => import("../src/AdminDasboard/Orders"))
const Payment = lazy(() => import("../src/AdminDasboard/Payment"))
const Product = lazy(() => import("../src/AdminDasboard/Product"))
const Setting = lazy(() => import("../src/AdminDasboard/Setting"))
const Suppliers = lazy(() => import("../src/AdminDasboard/Suppliers"))
const UserRole = lazy(() => import("../src/AdminDasboard/UserRole"))
const AdminLayout = lazy(() => import("../src/AdminDasboard/AdminLayout"))



function App() {
  // Move useRoutes inside the component body
  const route = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/SideBar', element: <SideBar /> },
    { path: '/banner', element: <Banner /> },
    { path: '/AddProduct/:id', element: <AddProduct /> },
    { path: '/checkout', element: <CheckOut /> },
    { path: '/ForgotPwd', element: <ForgotPwd /> },
    { path: '/adminAddProduct', element: <AdminAddProduct /> },

    {
      path: "/admin",
      element: <AdminLayout />, // Sidebar layout for admin
      children: [
        { path: "home", element: <AdminHome /> },
        { path: "customers", element: <Customer /> },
        { path: "enquiries", element: <Enquiry /> },
        { path: "orders", element: <Order /> },
        { path: "payments", element: <Payment /> },
        { path: "products", element: <Product /> },
        { path: "settings", element: <Setting /> },
        { path: "suppliers", element: <Suppliers /> },
        { path: "user-roles", element: <UserRole /> },
      ],
    },

  ]);

  return (
    <>
      <Suspense fallback={<div>Loadings...</div>}>
        {route}
      </Suspense>
    </>
  );
}

export default App;
