import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    callBack: (value: RatingValueType) => void
}

export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} callBack={props.callBack} value={1}/>
            <Star selected={props.value > 1} callBack={props.callBack} value={2}/>
            <Star selected={props.value > 2} callBack={props.callBack} value={3}/>
            <Star selected={props.value > 3} callBack={props.callBack} value={4}/>
            <Star selected={props.value > 4} callBack={props.callBack} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    callBack: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => {

    return (
        <span onClick={() => {
            props.callBack(props.value)
        }}>
         {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}