import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About/About"
import Error from "../Pages/SharePage/Error"
import Home from "../Pages/Home/Home/Home"
import Registration from "../Pages/Registration/Registration"
import LogIn from "../Pages/LogIn/LogIn"
import Profile from "../Pages/Profile/Profile"
import EditProfileModal from "../Pages/Profile/EditProfileModal/EditProfileModal"
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
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/editprofile",
                element: <EditProfileModal></EditProfileModal>
            },
        ]
    }
])