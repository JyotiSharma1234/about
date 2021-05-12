import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";
import NameSection from "./NameSection";

const useStyles = makeStyles((theme) => ({

}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <div>
            <NameSection/>
        </div>
    );
};

export default Home;
