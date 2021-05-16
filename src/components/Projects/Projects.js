import React, { useState } from "react";
import {
    Box,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20
    },
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

const Projects = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.heading}>
                Projects
            </Box>
            <Box>
                Coming soon...
            </Box>
        </Box>
    );
};

export default Projects;
