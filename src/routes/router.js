import {createBrowserRouter} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout';
import About from '../pages/about/About';


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
                path: '/about',
                element: <About />
            },
        ]},

    {
        path: '*',
        element: <NotFound />
    }
])

export default router