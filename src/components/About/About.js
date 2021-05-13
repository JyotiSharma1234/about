import React, { useState } from "react";
import {
    makeStyles,
    Typography,
    Box
} from "@material-ui/core";
import VizSensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';

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

const About = (props) => {
    const classes = useStyles();
    let [active, setActive] = useState(false);

    return (
        <VizSensor
        onChange={(isVisible) => {
            setActive(isVisible);
        }}>
            <Fade in={active} timeout={3000}>
                <Box>
                    <Box className={classes.heading}>
                        About
                    </Box>
                    <Typography variant="p" className={classes.h3} gutterBottom>I am a web developer from Pune, India.
                    I keep my work practical, relevant and creative.
                    Have a look at my past projects, and feel free to reach out with any questions.</Typography>
                    </Box>
            </Fade>
        </VizSensor>
    );
};

export default About;
