import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    ) // если не collapsed(не свёрнут), то тонда пакажи AccordionBody
}

type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3>
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