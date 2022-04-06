import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <Accordion/>
            <AccordionTitle/>
            <AccordionBody/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

const Star = () => {
    return (
        <div>
            star
        </div>
    )
}

const AccordionTitle = () => {
    return (
        <div>
            <h3>Меню</h3>
        </div>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}



export default App;
