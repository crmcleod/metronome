import React from 'react';
import image from '../pause.svg'


const PlayPauseButton = (props) => {

    function handlePlayPause(){
        props.onPlaying()
    }

    return (
        <img id="playButton" src={image} width="50" alt="play-pause-button" onClick={handlePlayPause}/>
    )
}
export default PlayPauseButton;