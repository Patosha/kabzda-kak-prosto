import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Accordion/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/Rating/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from './components/Accordion/Rating/UncontrolledRating/UncontrolledRating';
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className={'App'}>

            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>


            <Accordion titleValue={'Users'} collapsed={accordionCollapsed}/>

            <UncontrolledAccordion titleValue={'Menu'}/>


            <Rating value={ratingValue} callBack={setRatingValue}/>

            <UncontrolledRating/>

            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
