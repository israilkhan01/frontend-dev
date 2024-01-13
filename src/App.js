import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import About from "./components/About.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);