/**
 * All App routes, authenticated pages
 */
import React from "react";
const Home = React.lazy(() => import('./components/Home/Home'))
const Certificates = React.lazy(() => import('./components/Certificates/Certificates'))
const Blogs = React.lazy(() => import('./components/Blogs/Blogs'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))
const ContactMe = React.lazy(() => import('./components/ContactMe/ContactMe'))

let routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
];

export default routes;
