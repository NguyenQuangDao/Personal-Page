import React, { useContext, useState, memo, useEffect } from "react";

import './Music.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgMoNo from '../img/anhMoNo.jpg';
import axios from "axios";
import Playing from "./AudioPlayer/AudioPlayer";
import { Context } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)
function Music() {
    const { DataSongs, song, handeleShowMusic, showMusic, GetListMusic, handleListMusic, handleSetSong } = useContext(Context);
    const [idSong, setIdSong] = useState(0)

    // Animation Horizontal
    useEffect(() => {
        const Bar_Horizontal = document.querySelector('.Bar_Horizontal')
        if (GetListMusic === true) {
            Bar_Horizontal.classList.add('Horizontal')
        }
        else {
            Bar_Horizontal.classList.remove('Horizontal')
        }
    }, [GetListMusic])

    // handelePlaySong
    const handelePlaySong = (id) => {
        setIdSong(id)
        handleSetSong(id)
    }
    useEffect(() => {
        setIdSong(song.id)
    }, [song])
    return (
        <div id="Music">
            {/* Header_Music */}
            <div className="Header_Music" onClick={handeleShowMusic}>
                <div className="Choose_Music">
                    <div className="img">
                        <img className="img_MoNo" src={imgMoNo} />
                        <div className="bars-1 "></div>
                        <div className="Click_here_PlayMusic">Music</div>
                        <div className="bars-2 "></div>
                    </div>
                    <div className="Choose_Music_title">
                        <div className="Choose_Music_p">
                            <div className="Title_Name_Music">{song.id + 1}:{' '}{song.name}</div>
                            <div className="Title_Author_Music">{song.author}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Play_Music */}
            <div className={`Play_Music ${showMusic ? 'active2 ' : 'inactive2'}`}>
                <Playing />
            </div>
            {/* Lists_PlayMusic */}
            <div className={`Lists_PlayMusic ${showMusic ? 'active1 ' : 'inactive1'}`}>
                <div className="Header_Lists_PlayMusic" onClick={handleListMusic}>
                    <span className="List_Check_Icon">
                        <FontAwesomeIcon icon="fa-solid fa-list-ol" className="List_Check" />
                    </span>
                    <div class="Bar_RunLeft Bar_Horizontal" ></div>
                    <span className="Caret_Icon">
                        {GetListMusic ? <FontAwesomeIcon icon="fa-solid fa-caret-down" className="Caret_Down" /> : <FontAwesomeIcon icon="fa-solid fa-caret-left" className="Caret_Left" />}
                    </span>
                </div>
            </div>
            <div className={`Lists_Music ${GetListMusic ? 'active' : 'inactive'}`}>
                <table className="Lists">
                    {DataSongs.map((song, index) => (
                        <tr key={song.id} className={`My_song ${idSong === song.id ? 'Backgroud_My_Song' : ''}`}
                            onClick={() => handelePlaySong(song.id)}
                        >
                            <td className="index_song">{index + 1}</td>
                            <div className="Name_mySong"> <td className="name_song">{song.name}</td></div>
                            <div className="Author_Mysong"> <td className="author_song">{song.author}</td></div>

                            <div className="DownLoad_Mysong">
                                <td className="downLoad_song">
                                    <a href={song.url}>
                                        <FontAwesomeIcon icon="fa-solid fa-download" />
                                    </a>
                                </td>
                            </div>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default memo(Music)