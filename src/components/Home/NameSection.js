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
        borderStyle: 'double',  
        color: '#fff',
        borderColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

const NameSection = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>    
            <div className="typing_effect">
                <Typewriter
                    options={{
                        // strings: ["Hello!<br>I'm Jyoti Sharma, web developer from Pune"],
                        // , India.<br>Primarly expertised on Ruby on Rails<br>Also like to work on AngularJS, ReactJS"],
                        autoStart: true,
                        loop:true
                    }}
                    onInit={(typewriter)=> {
                        typewriter
                            .typeString("Explore! Learn! Grow!  repeat...")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </Box>
    );
};

export default NameSection;
