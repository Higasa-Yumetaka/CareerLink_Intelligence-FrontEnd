import * as React from 'react';
import {useEffect} from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import LandingTopBar from '../components/Landing/LandingTopBar';
import Hero from '../components/Landing/Hero';
import Highlights from '../components/Landing/Highlights';
import Functions from '../components/Landing/Functions';
import FAQ from '../components/Landing/FAQ';
import Footer from '../components/Landing/Footer';
import getLPTheme from '../getLPTheme';

export default function Landing() {
    const [mode, setMode] = React.useState(localStorage.getItem('ColorMode') || 'light');
    const [showCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme({palette: {mode}});

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const localMode = localStorage.getItem('ColorMode');
        if (localMode) {
            setMode(localMode);
        }
    }, []);

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline/>
            <LandingTopBar mode={mode} toggleColorMode={toggleColorMode}/>
            <Hero/>
            <Box sx={{bgcolor: 'background.default'}}>
                <Functions />
                <Divider />
                <Highlights />
                <Divider />
                {/*<FAQ />*/}
                {/*<Divider />*/}
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

