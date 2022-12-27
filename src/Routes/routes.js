import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About/About"
import Error from "../Pages/SharePage/Error"
import Home from "../Pages/Home/Home/Home"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])