import { createBrowserRouter } from "react-router"
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>welcome to 4 layer Architecture of React</h1>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])