import {useState} from "react";

type OnOffPropsType = {
    // nameButton: string
    // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false)

    const onStyle = {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: on ? 'green' : 'white',
        transition: 'ease-in-out .5s'
    };
    const offStyle = {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: on ? 'white' : 'red',
        transition: 'ease-in-out .5s'
    };
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        border: '1px solid black',
        transition: 'ease-in-out .5s',
        backgroundColor: on ? 'green' : 'red'
    };

    return (
        <div>
            <button style={onStyle} onClick={() => {
                setOn(true)
            }}>
                on
            </button>
            <button style={offStyle} onClick={() => {
                setOn(false)
            }}>
                off
            </button>
            <span style={indicatorStyle}></span>
        </div>
    )
}