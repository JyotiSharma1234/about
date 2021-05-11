import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";
import NameSection from "./NameSection";

const useStyles = makeStyles((theme) => ({
    section: {
        marginTop: 80,
        height: 700,
    },

}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <NameSection/>
        </div>
    );
};

export default Home;
