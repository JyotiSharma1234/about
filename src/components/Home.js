import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    section: {
        marginTop: 10,
        padding: 10,
        overflow: 'auto',
        height: 700,
    },

}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            Jyoti Sharma
        </div>
    );
};

export default Home;
