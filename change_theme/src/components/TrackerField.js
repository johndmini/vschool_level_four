import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext'
import { Button, Box, TextField, Typography } from '@mui/material';


export default function Tracker() {

    const {buttonColor, textColor, backgroundColor} = useContext(ThemeContext)
    

    return(
        <Box sx={{ height: '100%', textAlign: 'center', mt: '10px', backgroundColor: `${backgroundColor}`, color: `${textColor}`, padding: '20px' }}>
            <Typography variant="h4">Place Holder Tracker</Typography>
            <Button variant="contained" color={buttonColor}>Edit</Button>
            <br />
            <Box sx={{ padding: '20px', color: `{textColor}` }}>
                <TextField 
                variant='filled'
                multiline
                placeholder='Make the background color change using context'
                rows={5}/>
            </Box>
        </Box>
    )
}