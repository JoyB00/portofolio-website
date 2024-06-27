import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoot from "./root/HomeRoot";
import HomeMain from "./page/Home/HomeMain";
import MainAbout from "./page/About/MainAbout";
import MainContact from "./page/Contact/MainContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      {
        path: "about",
        element: <MainAbout />,
      },
      {
        path: "contact",
        element: <MainContact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
