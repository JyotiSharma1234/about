import React, { useState } from "react";
import {
    Box,
    Container,
    IconButton,
    Link,
    makeStyles,
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    linkedInicon:{
        color: '#fff'
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
    },
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
        marginBottom: 20,
    },
    mailIcon: {
        marginRight: 10
    }
}));

const ContactMe = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.section}>
            <Box>
                <Box className={classes.heading}>
                    Get in Touch
                </Box>
                <Box className={classes.p}>
                    Interested in learning more about me, my work or how we can collaborate on an upcoming project? Feel free to reach out anytime, I would be more than happy to chat.
                </Box>
                <Box>
                    <MailIcon fontSize="small" variant="contained" className={classes.mailIcon}/>
                    <span>sjyoti4321@gmail.com</span>
                </Box>
                <Box marginTop='10'>
                    <Link href="https://www.linkedin.com/in/jyoti-sharma8642/" color="inherit">
                        <LinkedInIcon fontSize="large" variant="contained" className={classes.linkedInicon} />
                    </Link>
                </Box>
            </Box>
            <br/>

        </Container>
    );
};

export default ContactMe;
