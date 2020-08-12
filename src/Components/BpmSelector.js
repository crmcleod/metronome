import React from "react";

const BpmSelector = (props) => {

    function handleBpmChange(event) {
        props.onBpmSelected(event.target.value);
    };

    return (
        <input id="bpm-bar" type="range" min="1" max="300" value={props.bpm} step="1" onChange={handleBpmChange}/>
    )

}

export default BpmSelector;