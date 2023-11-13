import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home.page";
import ProductPage from "./pages/product.page";
import AboutPage from "./pages/about.page";
import ErrorPage from "./pages/error.page";
import { Callback as CallBackPage } from "./pages/callback.page";
import ProductsPage from "./pages/products.page";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/callback",
        element: <CallBackPage />,
      },
    ],
  },
]);

export default appRoutes;
