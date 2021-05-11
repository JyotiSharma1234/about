import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Routes from './Routes'
import { Suspense } from 'react';

// Views 
import MainSection from './components/MainSection';
import TopScrollButton from './components/TopScrollButton'
import { makeStyles, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topScroll: {
        color: 'white',
        padding: 10,
        position: 'fixed',
        bottom: '10px',
        right: '10px',
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <main className="App-header">
                <MainSection/>
                <div className={classes.topScroll}>
                    <TopScrollButton/>
                </div>
            </main>
        </div>
    );
}

export default App;
