import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext'
import { Button, ButtonGroup, Box} from '@mui/material';

export default function Footer() {

    const {buttonColor, backgroundColor} = useContext(ThemeContext)

    return(
        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%', mb: '15px', padding: '10px', backgroundColor: `${backgroundColor}` }}>
            <ButtonGroup variant="contained" color={buttonColor}>
                <Button>Careers</Button>
                <Button>Contact Us</Button>
                <Button>About Us</Button>
            </ButtonGroup>
        </Box>
    )
}