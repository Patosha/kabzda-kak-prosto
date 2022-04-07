import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Accordion/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

const AppTitle = () => {
    return (
        <div>
            This is APP component
        </div>
    )
}

export default App;
