import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../NotFound';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
        ]},

    {
        path: '*',
        element: <NotFound />
    }

])

export default router;