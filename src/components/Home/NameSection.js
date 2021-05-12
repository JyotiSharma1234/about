import React, { useState } from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import "../CustomCss/typing.css"
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
    container: {
        height: 500,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },

    heading:{
        textAlign: 'center',
        paddingBottom: 30,
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20,
        paddingBottom: 20,
        position: 'relative',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
        marginBottom: 20,
    },
}));

const NameSection = (props) => {
    const classes = useStyles();
    return (

        <Box className={classes.container}>
            <Box className={classes.heading}>
                Who am I?
            </Box>
            <Box className={classes.p}>
                Hello👋, I'm Jyoti Sharma
            </Box>
            <Box>
                I am a web developer from Pune, India.
                I keep my work practical, relevant and creative.
                Have a look at my past projects, and feel free to reach out with any questions.
            </Box>
            <Box className="typing_effect">
                <Typewriter
                    options={{
                        strings: ["Explore! Learn! Grow!  repeat..."],
                        autoStart: true,
                        loop:true
                    }}
                    // onInit={(typewriter)=> {
                    //     typewriter
                    //         .typeString("Explore! Learn! Grow!  repeat...")
                    //         .pauseFor(1000)
                    //         .deleteAll()
                    //         .start();
                    //     }}
                        />
            </Box>
        </Box>
    );
};

export default NameSection;
