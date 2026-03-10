import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/client/Homepage";
import Products from "../pages/client/Products";
import Contact from "../pages/client/Contact";
import UserLayout from "../layout/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import CustomerPage from "../pages/user/CustomerPage";
import OrderPage from "../pages/user/OrderPage";
import ProductPage from "../pages/user/ProductPage";
import SettingPage from "../pages/user/SettingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]

    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: '/user/dashboard',
                element: <Dashboard />
            },
            {
                path: '/user/customers',
                element: <CustomerPage />
            },
            {
                path: '/user/orders',
                element: <OrderPage />
            },
            {
                path: '/user/products',
                element: <ProductPage />
            },
            {
                path: '/user/settings',
                element: <SettingPage avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            }
        ]
    }
]);

export default router;