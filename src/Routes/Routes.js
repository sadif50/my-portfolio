import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);

export default router;