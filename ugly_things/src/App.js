import React from 'react';
import Form from './components/Form';
import MapUgly from './components/UglyList';
import { UglyContextProvider } from './provider'

export default function App() {
    return(
        <div>
            <UglyContextProvider>
                <Form />
                <MapUgly />
            </UglyContextProvider>       
        </div>
    )
}