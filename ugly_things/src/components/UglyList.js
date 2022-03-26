import React, {useContext, useState} from 'react';
import { UglyContext } from '../provider';
import { Box, Typography, Button, TextField, FormControl } from '@mui/material';
import { Save, Delete, Edit } from '@mui/icons-material'

export default function MapUgly() {
    const { uglyList} = useContext(UglyContext);
    const [toggleEdit, setToggleEdit] = useState(false)
    const axios = require('axios');

    const [editUgly, setEditUgly] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })

    const handleEditToggle = (e) => {
        setToggleEdit(prevState => !prevState)
    }

    const handleDelete = (e) => {
        axios.delete(`https://api.vschool.io/johndaviddelgado/thing/${e.target.parentElement.id}`)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    const handleChangeUgly = (e) => {
        console.log(e.target)
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
        <Box>
            {uglyList.map(ugly => (
                <Box key={ugly._id} id={ugly._id} sx={{ textAlign: 'center', mt: '20px' }}>
                    <Typography variant='h5'>
                        {ugly.title}
                    </Typography>
                    <Box>
                        <img src={ugly.imgUrl} alt={ugly.title} />
                    </Box>
                    <Typography variant='subtitle2'>
                        {ugly.description}
                    </Typography>
                    {toggleEdit && <Box>
                        <FormControl sx={{ display: 'inline-block' }}>
                            <TextField
                                name='imgUrl'
                                id='outlined-name'
                                label='IMG URL'
                                value={editUgly.imgUrl}
                                onChange={handleChangeUgly}
                            />
                            <TextField
                                name='title'
                                id='outlined-name'
                                label='TITLE'
                                value={editUgly.title}
                                onChange={handleChangeUgly}
                            />
                            <TextField
                                name='description'
                                id='outlined-name'
                                label='DESCRIPTION'
                                value={editUgly.description}
                                onChange={handleChangeUgly}
                            />
                        </FormControl>
                    </Box>}
                    {!toggleEdit && <Button startIcon={<Edit/>} variant='contained' onClick={handleEditToggle}>Edit</Button>}
                    {toggleEdit && <Button startIcon={<Save/>} variant='contained' sx={{ backgroundColor: 'green' }} onClick={handleEditUgly}>Save</Button>}
                    <Button startIcon={<Delete/>} variant='contained' sx={{ backgroundColor: 'red' }}onClick={handleDelete}>Delete</Button>
                </Box>
            ))}
        </Box>
    )
}