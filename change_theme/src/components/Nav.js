import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext'
import { Button, ButtonGroup, Box } from '@mui/material';

export default function Nav() {

    const {buttonColor, backgroundColor} = useContext(ThemeContext)

    return (
        <Box sx={{ padding: '10px', backgroundColor: `${backgroundColor}` }}>
            <ButtonGroup variant="contained" color={buttonColor}>
                <Button>Projects</Button>
                <Button>QA/QC Tracker</Button>
                <Button>Add Bug Tracker</Button>
            </ButtonGroup>
            <Button variant="contained" sx={{ position: 'fixed', right: 0, mr: '15px' }} color={buttonColor}>Log Out</Button>
        </Box>
    )
}