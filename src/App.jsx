import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoot from "./root/HomeRoot";
import HomeMain from "./Home/HomeMain";
import MainAbout from "./About/MainAbout";


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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
