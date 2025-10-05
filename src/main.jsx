import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pakge/Root.jsx";
import Main from "./pakge/Main.jsx";
import About from "./pakge/About.jsx";
import ReadList from "./pakge/ReadList.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/promise.json"),
    Component: Root,
    children: [
      {
        index: true,
        path:'/',
        Component: Main,
        loader: () => fetch("/promise.json"),
      },
      {
        path:'/readList',
         loader: () => fetch("/promise.json"),
        Component:ReadList
      }
      ,
     {
      path:'/details/:id',
      loader:()=>fetch("/promise.json"),
      Component:About
     }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
