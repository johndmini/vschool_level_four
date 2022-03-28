import React, {useState, useEffect} from 'react';

const UglyContext = React.createContext();
const axios = require('axios');

const UglyContextProvider = (props) => {
    const [uglyThings, setUglyThings] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })

    const [uglyList, setUglyList] = useState([])
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUglyThings(prevUgly => {
            return {
                ...prevUgly,
                [name]: value
            }
        })
    }

    const addUglyThing = () => {
        axios.post('https://api.vschool.io/johndaviddelgado/thing', uglyThings)
            .then(res => setUglyThings({
                imgUrl: "",
                title: "",
                description: ""
            }))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('https://api.vschool.io/johndaviddelgado/thing')
            .then(res => setUglyList(res.data))
            .catch(err => console.log(err))
    }, [uglyThings])

    return(
        <UglyContext.Provider value={{
            uglyList,
            setUglyList,
            uglyThings,
            handleChange,
            addUglyThing,
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export { UglyContext, UglyContextProvider }