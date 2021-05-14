import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";
import NameSection from "./NameSection";
import ContactMe from "../ContactMe/ContactMe";
import About from "../About/About";
import Certificates from "../Certificates/Certificates";
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";

const useStyles = makeStyles((theme) => ({

}));

const Home = (props) => {
    const classes = useStyles();
    let [active, setActive] = useState(false);

    return (
        <div>
            <NameSection/>
            <About/>
            <Certificates/>
            <Projects/>
            <Blogs/>
            <ContactMe/>
        </div>
    );
};

export default Home;
