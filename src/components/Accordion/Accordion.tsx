import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack: () => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={props.callBack}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    ) // если не collapsed(не свёрнут), то тонда пакажи AccordionBody
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={props.callBack}>
                {props.title}
            </h3>
        </div>
    )
}

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}