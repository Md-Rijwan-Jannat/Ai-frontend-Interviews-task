import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../layout/Register";
import Login from "../pages/Login"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [{
            path: '/',
            element:<Home></Home>
        }]
    },
    {
        path: "/",
        element: <Register></Register>,
        children: [{
            path: '/login',
            element: <Login></Login>
        }]
    },
]);

export default router;