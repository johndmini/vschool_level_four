import React, {useState} from 'react';

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [textColor, setTextColor] = useState('black')
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [buttonColor, setButtonColor] = useState('primary')

    const toggleTheme = () => {
        setTextColor(prevColor => prevColor === 'black' ? 'teal' : 'black')
        setBackgroundColor(prevColor => prevColor === 'white' ? 'black' : 'white')
        setButtonColor(prevColor => prevColor === 'primary' ? 'secondary' : 'primary')
    }
    
    return (
        <ThemeContext.Provider value={{
            buttonColor,
            textColor,
            backgroundColor,
            toggleTheme,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}