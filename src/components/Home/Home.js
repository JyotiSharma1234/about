import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";
import NameSection from "./NameSection";
import ContactMe from "../ContactMe/ContactMe";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";

const useStyles = makeStyles((theme) => ({

}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <div>
            <NameSection/>
            <About/>
            <Projects/>
            <Blogs/>
            <ContactMe/>
        </div>
    );
};

export default Home;
