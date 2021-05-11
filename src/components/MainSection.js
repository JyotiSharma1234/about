import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
    section: {
        marginTop: 80,
        padding: 10,
        overflow: 'auto',
        height: 700,
        color: 'yellow'
    },

}));

const MainSection = (props) => {
    const classes = useStyles();

    return (
        <div>
            <TopBar/>
        </div>
    );
};

export default MainSection;