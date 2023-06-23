import React from 'react';
import {createRoot} from 'react-dom/client'
import Navbar from './navbar';


const App = () => {
    return (
        <Navbar/>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)