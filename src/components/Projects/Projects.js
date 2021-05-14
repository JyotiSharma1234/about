import React, { useState } from "react";
import {
    Box,
    Container,
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
        <Container className={classes.root}>
            <Box className={classes.heading}>
                Projects
            </Box>
            <Box>
                Coming soon...
            </Box>
        </Container>
    );
};

export default Projects;
