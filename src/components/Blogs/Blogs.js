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

const Blogs = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box className={classes.heading}>
                Blogs
            </Box>
            <Box>
                Coming soon...
            </Box>
        </Container>
    );
};

export default Blogs;
