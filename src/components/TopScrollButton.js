import React, { useState } from "react";
import {
    makeStyles,
    IconButton,
} from "@material-ui/core";
import UpArrowIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import '../components/CustomCss/bounce.css'

const useStyles = makeStyles((theme) => ({
}));

const TopScrollButton = (props) => {
    const classes = useStyles();

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    return (
        <IconButton
            title="Scroll to Top"
            size='medium'
            className="animated bounce"
            color="inherit"
            onClick={scrollToTop}
            >
            <UpArrowIcon />
        </IconButton>
        
        );
};

export default TopScrollButton;
