import React, { lazy, Suspense } from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
// import About from "./components/About.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Userclass from "./components/Userclass.js";

const About = lazy(() => { return import("./components/About.js") })

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
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h1>Loading....</h1>}>
          <About />
          </Suspense>),
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error />,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);