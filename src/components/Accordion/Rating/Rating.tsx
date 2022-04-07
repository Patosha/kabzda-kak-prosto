import React from "react";


export const Rating = () => {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
const Star = (props: any) => {

    if (props.selected === true) {
      return  <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}