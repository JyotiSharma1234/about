import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Avatar, Box } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import {BoxLoading} from 'react-loadingg'
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const useStyles = makeStyles((theme) => ({
    avtar: {
        color: theme.palette.getContrastText(blueGrey[500]),
        backgroundColor: blueGrey[500],
    },
    boxLoading:{
        position: 'fixed',
        margin: 0,
        marginBottom: 40
    }
}));
const Navbar = () => {
    const classes = useStyles();

  return (
    <>
        <Nav>
            <NavMenu>
                <NavLink to='/' activeStyle>
                    <Box className={classes.boxLoading}>
                        <BoxLoading size='large' className={classes.boxLoading}/>
                    </Box>
                </NavLink>
                <NavBtn>
                    <NavBtnLink to='/'>Jyoti Sharma</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to='/certificates'>Certificates</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to='/blogs'>Blogs</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to='/projects'>Projects</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    </>
  );
};
  
export default Navbar;