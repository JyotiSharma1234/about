import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './components/utils/ParticlesConfig'

// Views 
import MainSection from './components/MainSection';
import TopScrollButton from './components/TopScrollButton'
import { makeStyles, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topScroll: {
        color: 'white',
        backgroundColor: 'steelblue',
        borderRadius: '50%',
        position: 'fixed',
        bottom: '10px',
        right: '10px',
    },
    particles: {
        position: 'absolute !important'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <main className="App-header">
            <div style={{ position: 'absolute'}}>
                <Particles height="100%" width="90vw" params={particlesConfig} />
            </div>
                <MainSection/>
                <div className={classes.topScroll}>
                    <TopScrollButton/>
                </div>
            </main>
        </div>
    );
}

export default App;
