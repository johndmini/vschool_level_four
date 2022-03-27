import React, {useContext} from 'react';
import { Box, Button, TextField } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import { UglyContext } from '../provider';


export default function Form() {
    const { uglyThings, handleChange, addUglyThing } = useContext(UglyContext);
        
    return (
        <Box sx={{ border: '2px solid gray' ,width: '800px', m: '0 auto', padding: '20px' }}>
            <Box sx={{ textAlign: 'center', mt: '20px' }}>
                <TextField 
                    fullWidth
                    inputProps={{ maxLength: '1000'}}
                    helperText={`${uglyThings.imgUrl.length}/1000`}
                    name='imgUrl'
                    id='outlined-name'
                    label='IMG URL'
                    value={uglyThings.imgUrl}
                    onChange={handleChange}/>
                <TextField
                    fullWidth
                    inputProps={{ maxLength: '50' }}
                    helperText={`${uglyThings.title.length}/50`}
                    name='title'
                    id='outlined-name'
                    label='TITLE'
                    value={uglyThings.title}
                    onChange={handleChange}/>
                <TextField
                    fullWidth
                    inputProps={{ maxLength: '100' }}
                    helperText={`${uglyThings.description.length}/100`}
                    name='description'
                    id='outlined-name'
                    label='DESCRIPTION'
                    value={uglyThings.description}
                    onChange={handleChange}/>
                <Button startIcon={<PublishIcon/>} variant='contained' onClick={addUglyThing} sx={{ height: '55px', mt: '10px;' }}>Submit Ugly</Button>   
            </Box>
        </Box>
    )
}