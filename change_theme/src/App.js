import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import Tracker from './components/TrackerField';
import Footer from './components/Footer'
import {ThemeContextProvider} from './themeContext'


export default function App() {
    return(
        <>
            <ThemeContextProvider>
                <Nav />
                <Main />
                <Tracker />
                <Footer />
            </ThemeContextProvider>
        </>
    )
}