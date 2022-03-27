import React, {useContext, useState} from 'react';
import { UglyContext } from '../provider';
import { Box, Typography, Button, TextField, FormControl } from '@mui/material';
import { Save, Delete, Edit } from '@mui/icons-material'

export default function MapUgly() {
    const { uglyList } = useContext(UglyContext);
    const [toggleEdit, setToggleEdit] = useState(null)
    const axios = require('axios');

    const [editUgly, setEditUgly] = useState({
        imgUrl: "",
        title: "",
        description: "",
    })

    const handleEditToggle = (id) => {
        setToggleEdit(prevState => prevState === id ? null : id)
    }

    const handleDelete = (e) => {
        axios.delete(`https://api.vschool.io/johndaviddelgado/thing/${e.target.parentElement.id}`)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    const handleChangeUgly = (e) => {
        const {name, value} = e.target;
        setEditUgly(prevUgly => {
            return {
                ...prevUgly,
                [name]: value
            } 
        })
    }

    const handleEditUgly = (e) => {
        axios.put(`https://api.vschool.io/johndaviddelgado/thing/${e.target.parentElement.id}`, editUgly)
            .then(res => window.location.reload())
    }

    return (
        <Box >
            {uglyList.map(ugly => (
                <Box key={ugly._id} id={ugly._id} sx={{ textAlign: 'center', mt: '20px', display: 'inline-block', m: '10px'}}>
                    <Typography variant='h5'>
                        {ugly.title}
                    </Typography>
                    <Box>
                        <img src={ugly.imgUrl} alt={ugly.title} />
                    </Box>
                    <Typography sx={{ width: '200px' }}variant='subtitle2'>
                        {ugly.description}
                    </Typography>
                    {toggleEdit === ugly._id && <Box>
                        <FormControl sx={{ display: 'inline-block' }}>
                            <TextField
                                inputProps={{ maxLength: '1000'}}
                                helperText={`${editUgly.imgUrl.length}/1000`}
                                name='imgUrl'
                                id='outlined-name'
                                label='IMG URL'
                                value={editUgly.imgUrl}
                                onChange={handleChangeUgly}
                            />
                            <TextField
                                inputProps={{ maxLength: '20' }}
                                helperText={`${editUgly.imgUrl.length}/20`}
                                name='title'
                                id='outlined-name'
                                label='TITLE'
                                value={editUgly.title}
                                onChange={handleChangeUgly}
                            />
                            <TextField
                                inputProps={{ maxLength: '100' }}
                                helperText={`${editUgly.description.length}/100`}
                                name='description'
                                id='outlined-name'
                                label='DESCRIPTION'
                                value={editUgly.description}
                                onChange={handleChangeUgly}
                            />
                        </FormControl>
                    </Box>}
                    {!toggleEdit && <Button startIcon={<Edit/>} variant='contained' onClick={() => handleEditToggle(ugly._id)}>Edit</Button>}
                    {toggleEdit === ugly._id && <Button startIcon={<Save/>} variant='contained' sx={{ backgroundColor: 'green' }} onClick={handleEditUgly}>Save</Button>}
                    <Button startIcon={<Delete/>} variant='contained' sx={{ backgroundColor: 'red' }}onClick={handleDelete}>Delete</Button>
                </Box>
            ))}
        </Box>
    )
}