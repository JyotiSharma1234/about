import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({

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