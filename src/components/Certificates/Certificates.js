import React, { useState } from "react";
import {
    makeStyles,
    Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heading:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20,
        paddingBottom: 20,
        position: 'relative',
        color: '#fff',
    },
}));

const Certificates = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.heading}>
                Certificates
            </Box>
        </Box>
    );
};

export default Certificates;
