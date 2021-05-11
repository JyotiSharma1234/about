  import React, { useState } from "react";
  import {
      makeStyles,
      withStyles,
      Tabs,
      Tab,
      Typography,
      Box
  } from "@material-ui/core";
import Certificates from "./Certificates/Certificates";
import Blogs from "./Blogs/Blogs";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import About from "./About/About";
import Home from "./Home/Home";
import {BoxLoading} from 'react-loadingg'
import { ClassRounded, DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    boxLoading:{
        position: 'fixed',
        marginBottom: 40
    }
}));
  
const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
      },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const Tabpanel = (props) => {
    const { children, value, index, ...others } = props

    return (
        <Typography 
            component="div" 
            className="tabpanel"
            role="tabpanel" 
            hidden={value !== index}
            id={`styled-tabpanel-${index}`}
            aria-labelledby={`styled-tab-${index}`} 
            {...others}>

            { value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

  
const TopBar = (props) => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
    };

    return (
        <div className={classes.root}>
            <StyledTabs
            value={currentTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="yellow"
      >
              <StyledTab label="Jyoti Sharma" />
              <StyledTab label="Certificates" />
              <StyledTab label="Blogs" />
              <StyledTab label="Projects" />
              <StyledTab label="About" />
              <StyledTab label="Contact Me" />
            </StyledTabs>
            <Tabpanel index={0} value={currentTab}>
                <Home/>
            </Tabpanel>
            <Tabpanel index={1} value={currentTab}>
                <Certificates/>
            </Tabpanel>
            <Tabpanel index={2} value={currentTab}>
                <Blogs/>
            </Tabpanel>
            <Tabpanel index={3} value={currentTab}>
                <Projects/>
            </Tabpanel>
            <Tabpanel index={4} value={currentTab}>
                <About/>
            </Tabpanel>
            <Tabpanel index={5} value={currentTab}>
                <ContactMe/>
            </Tabpanel>
        </div>
      );
  }

  export default TopBar;
  