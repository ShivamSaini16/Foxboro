import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./Dashboard/Home"));
const Login = lazy(() => import("./Login"));
const Signup = lazy(()=> import("./Signup"))
const Cart = lazy(()=> import("./Dashboard/Cart"))
const SideBar = lazy(()=> import("./Components/SideBar"))
const Banner = lazy(()=> import("./Components/Banner"))

function App() {
  // Move useRoutes inside the component body
  const route = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/SideBar', element: <SideBar /> },
    { path: '/banner', element: <Banner /> }
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
