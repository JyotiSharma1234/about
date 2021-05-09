/**
 * All App routes, authenticated pages
 */
import React from "react";
const Home = React.lazy(() => import('./components/Home/Home'))
const Certificates = React.lazy(() => import('./components/Certificates/Certificates'))
const Blogs = React.lazy(() => import('./components/Blogs/Blogs'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))

let routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        redirect: false
    },
    {
        path: '/certificates',
        component: Certificates,
        exact: true,
        redirect: false
    },
    {
        path: '/blogs',
        component: Blogs,
        exact: true,
        redirect: false
    },
    {
        path: '/projects',
        component: Projects,
        exact: true,
        redirect: false
    },

];

export default routes;
