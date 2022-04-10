type OnOffPropsType = {
    on: boolean
    callBack: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: props.on ? 'green' : 'white',
        transition: 'ease-in-out .5s'
    };
    const offStyle = {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: props.on ? 'white' : 'red',
        transition: 'ease-in-out .5s'
    };
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        border: '1px solid black',
        transition: 'ease-in-out .5s',
        backgroundColor: props.on ? 'green' : 'red'
    };

    return (
        <div>
            <button style={onStyle} onClick={() => {
                props.callBack(true)
            }}>
                on
            </button>
            <button style={offStyle} onClick={() => {
                props.callBack(false)
            }}>
                off
            </button>
            <span style={indicatorStyle}></span>
        </div>
    )
}