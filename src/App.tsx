import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Accordion/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/Rating/UncontrolledAccordion/UncontrolledAccordion";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={'App'}>

            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <Rating value={ratingValue} callBack={setRatingValue}/>

            {/*<UncontrolledRating/>*/}

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
