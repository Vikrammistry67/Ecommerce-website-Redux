import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layoutComponent/Layout";
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import CreateProduct from "../../pages/product/CreateProduct";
import UpdateProuct from "../../pages/product/UpdateProuct";
import PageNotFound from "../../pages/pagenotfound/PageNotFound";
import Home from "../../pages/home/Home";
import MyCart from "../../pages/Carts/MyCart";
import MyOrder from "../../pages/Orders/MyOrder";


const MainRoutes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },


                // Auth - routes --->
                {
                    path: '/auth/login',
                    element: <Login />
                },

                {
                    path: '/auth/register',
                    element: <Register />
                },


                // product - Routes ---> 
                {
                    path: '/product/create',
                    element: <CreateProduct />
                },

                {
                    path: '/product/update',
                    element: <UpdateProuct />
                },


                // pageNotFound > Routes ------>

                {
                    path: '/notfound/pageNotFound',
                    element: <PageNotFound />
                },


                // cart - Routes ---->
                {
                    path: '/cart/mycart',
                    element: <MyCart />
                },


                // order - Routes ---->
                {
                    path: '/order/myorder',
                    element: <MyOrder />
                },
            ]
        }
    ]);


export default MainRoutes;