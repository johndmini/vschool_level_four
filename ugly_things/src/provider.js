import React, {useState, useEffect} from 'react';

const UglyContext = React.createContext();
const axios = require('axios');

function UglyContextProvider(props) {
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
            .then(res => window.location.reload())
            .catch(err => console.log(err))
        setUglyThings({
            imgUrl: "",
            title: "",
            description: ""
        })
    }

    useEffect(() => {
        axios.get('https://api.vschool.io/johndaviddelgado/thing')
            .then(res => setUglyList(res.data))
            .catch(err => console.log(err))
    }, [uglyList.length])

    return(
        <UglyContext.Provider value={{
            uglyList,
            uglyThings,
            handleChange,
            addUglyThing,
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export { UglyContext, UglyContextProvider }