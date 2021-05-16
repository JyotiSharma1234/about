import React, { useState } from "react";
import {
    makeStyles,
    Typography,
    Box,
    Link
} from "@material-ui/core";
import VizSensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';

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
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 200,
        textAlign: 'left',
    },
    link:{
        color: 'inherit',
        fontWeight: 'bold',
    }

}));

const About = (props) => {
    const classes = useStyles();
    let [active, setActive] = useState(false);

    return (
        <VizSensor
        onChange={(isVisible) => {
            setActive(isVisible);
        }}>
            <Fade in={active} timeout={1000}>
                <Box className={classes.root}>
                    <Box className={classes.heading}>
                        Me talking about myself...
                    </Box>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        Hello, I am Jyoti Sharma, a web developer, post graduated in Computer Science from <Link className={classes.link} href="https://www.fergusson.edu/" target='_blank'> Fergusson College</Link>, Pune ,India.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I am <Link href="https://ugcnet.nta.nic.in/" target="_blank" className={classes.link}>UGC-NET</Link> qualified, that means I am officially eligible for being an assistant professor anywhere in India.
                        Also, I am HTET (PGT) qualified, eligible for PGT teacher in Haryana, India.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>

                        I like to use my skills to solve problems, try new stuffs. If not working, unlearn things, try again is my way.
                        I like to play with code.
                        I love to code and teach.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        Apart from coding and teaching, I am passionate about drawing and calligraphy too.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I started my career as a software Engineer in Jan 2018
                        Have a look at my past projects, and feel free to reach out with any questions.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I strongly belives in <br/><b>"Making knowledge to stand out of crowd"</b>. <br/>
                    </Typography>
                </Box>
            </Fade>
        </VizSensor>
    );
};

export default About;
