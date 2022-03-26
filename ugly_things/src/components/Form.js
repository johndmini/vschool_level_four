import React, {useContext} from 'react';
import { Box, Button, TextField } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import { UglyContext } from '../provider';


export default function Form() {
    const { uglyThings, handleChange, addUglyThing } = useContext(UglyContext);
        
    return (
        <Box>
            <Box sx={{ textAlign: 'center', mt: '20px' }}>
                <TextField 
                    name='imgUrl'
                    id='outlined-name'
                    label='IMG URL'
                    value={uglyThings.imgUrl}
                    onChange={handleChange}/>
                <TextField
                    name='title'
                    id='outlined-name'
                    label='TITLE'
                    value={uglyThings.title}
                    onChange={handleChange}/>
                <TextField
                    name='description'
                    id='outlined-name'
                    label='DESCRIPTION'
                    value={uglyThings.description}
                    onChange={handleChange}/>
                <Button startIcon={<PublishIcon/>} variant='contained' onClick={addUglyThing} sx={{ height: '55px', ml: '10px;' }}>Submit Ugly</Button>   
            </Box>
        </Box>
    )
}