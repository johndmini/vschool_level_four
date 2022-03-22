import React, { useState, useRef } from 'react';
import { TextareaAutosize, Box, Button, Typography } from "@mui/material"

export default function App() {
    const [text, setText] = useState("")
    const [time, setTime] = useState(20)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)

    const handleText = (e) => {
        const {value} = e.target
        setText(value)
        handleWordCount(text)
    }

    const handleWordCount = (typedWords) => {
        const wordsArray = typedWords.trim().split(" ")
        setWordCount(wordsArray.filter(word => word !== " ").length)
    }
    
    const handleTimer = () => {
        inputRef.current.disabled = false
        inputRef.current.focus()
        setInterval(() => {
            setTime(prevState => prevState > 0 ? prevState - 1 : 0)
        }, 1000)
    }

    return(
        <Box sx={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
            <Typography variant="h3">Speed Typing Game</Typography>
            <TextareaAutosize 
                disabled = {time === 20 || time === 0 ? true : false}
                ref={inputRef}
                style={{ width: 500, height: 300 }}
                value={text}
                onChange={handleText}
            />
            <Typography variant="h4">Time Remaining: {time}</Typography>
            <Button
                sx={{ backgroundColor: 'blue', color: 'white', ':hover': {backgroundColor: 'cornflowerblue'}, ':disabled': {backgroundColor: 'teal'} }}
                onClick={handleTimer}
                disabled={time < 20 ? true : false}>
            Start Game</Button>
            <Typography>Word Count: {wordCount}</Typography>
        </Box>
    )
}