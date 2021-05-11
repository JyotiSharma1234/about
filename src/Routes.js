/**
 * All App routes, authenticated pages
 */
import React from "react";
const Home = React.lazy(() => import('./components/Home/Home'))

let routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
];

export default routes;
