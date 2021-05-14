import React, { useState } from "react";
import Logo from '../../images/certificates/jquery_udemy.jpg';
import {
    makeStyles,
    Box,
    Container,
} from "@material-ui/core";
import VizSensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';
import certificatesList from './CertificateList'
import Lightbox from 'react-lightbox-component';
import "react-lightbox-component/build/css/index.css";

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
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    image: {
        height: 350,
        width: 400,
        padding: 10,
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)',
            boxShadow: 'rgba(224, 224, 224) 0px 0px 15px',
        }
    },
}));


const Certificates = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box>
                <Box className={classes.heading}>
                    Certificates
                </Box>
                <Box className={classes.wrapper}>
                    <Lightbox
                        thumbnailWidth='350px'
                        thumbnailHeight='300px'
                        images={certificatesList}
                        showImageModifiers={false}
                        renderImageFunc={(idx, image, toggleLightbox, width, height) => {
                            return (
                            <img
                            key={idx}
                            src={image.src}
                            className={classes.image}
                            style={{width: width, height: height}}
                            onClick={toggleLightbox.bind(null, idx)} />
                            )
                            }}/>
                </Box>
            </Box>
        </Container>
    );
};

export default Certificates;
