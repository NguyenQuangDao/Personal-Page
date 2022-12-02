import React, { useContext } from "react";
import { Context } from "../../Context";
import './AudioPlayer'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Playing() {
    const { song, handleSetSong } = useContext(Context)
    const handleNext = () => {
        handleSetSong(song.id + 1)
    }
    const handlePrevious = () => {
        handleSetSong(song.id - 1)

    }
    return (
        <div>
            <AudioPlayer
                // autoPlay
                src={song.url}
                layout="stacked"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
                // customVolumeControls={[]}
                // customAdditionalControls={[]}
            />
        </div>
    )
};
