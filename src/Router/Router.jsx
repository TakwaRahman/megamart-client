import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CreateProducts from "../CreateProducts/CreateProducts";
import AllProducts from "../components/AllProducts/AllProducts";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MyProducts from "../components/MyProducts/MyProducts";


const Router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    index: true,
                    Component: Home
                },
                {
                    path: 'login',
                    Component: Login
                },
                {
                    path: 'register',
                    Component: Register
                },
                {
                    path: 'createProducts',
                    Component: CreateProducts
                },
                {
                    path: 'allProducts',
                    element: <PrivateRoute>
                        <AllProducts></AllProducts>
                    </PrivateRoute>
                },
                {
                    path: 'myProducts',
                    element: <PrivateRoute>
                        <MyProducts></MyProducts>
                    </PrivateRoute>
                }
            ]
        }
    ]

)


export default Router