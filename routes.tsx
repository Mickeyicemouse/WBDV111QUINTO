import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { AboutUs } from "./pages/AboutUs";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "about", Component: AboutUs },
      { path: "login", Component: Login },
    ],
  },
]);
