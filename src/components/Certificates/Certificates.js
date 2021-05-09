import React, { useState } from "react";
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    section: {
        marginTop: 80,
        padding: 10,
        overflow: 'auto',
        height: 700,
        color: 'yellow'
    },

}));

const Certificates = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            Certificates
        </div>
    );
};

export default Certificates;
