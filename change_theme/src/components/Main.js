import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext'
import { Button, Box, Typography } from '@mui/material';


export default function Main() {

    const {buttonColor, toggleTheme, textColor, backgroundColor} = useContext(ThemeContext)

    return(
        <Box sx={{ textAlign: 'center', marginTop: '20px', height: '100%', backgroundColor: `${backgroundColor}`, color: `${textColor}`, padding: '20px'}}>
            <Typography variant='h3'>
                Hello, Welcome to Change Theme Central
            </Typography>
            <Button variant='contained' color={buttonColor} onClick={toggleTheme}>Change Theme</Button>
        </Box>
    )
}