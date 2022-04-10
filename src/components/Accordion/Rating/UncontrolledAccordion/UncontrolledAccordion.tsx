import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={() => {
                setCollapsed(!collapsed)
            }}/>

            {collapsed && <AccordionBody/>}
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
            <h3 onClick={() => {
                props.callBack()
            }}>
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