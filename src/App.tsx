import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Star} from "./components/Accordion/Rating/Rating";

function App() {
    return (
        <div>
            <Accordion/>
            <Star/>
        </div>
    );
}

export default App;
