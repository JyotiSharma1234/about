/**
 * All App routes, authenticated pages
 */
import React from "react";
const Home = React.lazy(() => import('./components/Home'))
const Certificate = React.lazy(() => import('./components/Certificate'))

let routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        redirect: false
    },
    {
        path: '/certificates',
        component: Certificate,
        exact: true,
        redirect: false
    },
];

export default routes;
