import {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    const [uncontrolledOn, setUncontrolledOn] = useState(false)

    const onStyle = {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: uncontrolledOn ? 'green' : 'white',
        transition: 'ease-in-out .5s'
    };
    const offStyle = {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: uncontrolledOn ? 'white' : 'red',
        transition: 'ease-in-out .5s'
    };
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        border: '1px solid black',
        transition: 'ease-in-out .5s',
        backgroundColor: uncontrolledOn ? 'green' : 'red'
    };

    const onClicked = () => {
        setUncontrolledOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setUncontrolledOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>
                on
            </button>

            <button style={offStyle} onClick={offClicked}>
                off
            </button>

            <span style={indicatorStyle}></span>
        </div>
    )
}