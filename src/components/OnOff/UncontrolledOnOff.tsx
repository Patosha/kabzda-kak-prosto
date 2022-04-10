import {useState} from "react";

export const UncontrolledOnOff = () => {
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

    return (
        <div>
            <button style={onStyle} onClick={() => {
                setUncontrolledOn(true)
            }}>
                on
            </button>
            <button style={offStyle} onClick={() => {
                setUncontrolledOn(false)
            }}>
                off
            </button>
            <span style={indicatorStyle}></span>
        </div>
    )
}