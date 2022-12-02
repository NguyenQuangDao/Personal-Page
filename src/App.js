import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import TitleComback from './TItle_comback/TItle_comback';
import Weather from './Weather/Weather';
import Music from './Music/Music';
import { Context } from './Context';
import DataSongs from './/Data/Data.json'
function App() {
  const [PlayPause_Music, setPlayPause_Music] = useState(false)
  const [GetListMusic, setGetListMusic] = useState(false)
  const [song, setSong] = useState(DataSongs[0])
  const [showMusic, setShowMusic] = useState(false)
  //////////////////////////// Music /////////////////////////////
  // show music
  const handeleShowMusic = () => {
    setShowMusic(!showMusic)
    if (GetListMusic) {
      setGetListMusic(!GetListMusic)
    }
  }

  // set song
  const handleSetSong = (idDataSong) => {
    const dataSong = DataSongs.find(item => item.id === idDataSong);
    if (!dataSong) {
      setSong(DataSongs[0])
    }
    else {
      setSong(dataSong)
    }
  }
  // PlayPause_Music
  const handlePlayMusic = () => {
    setPlayPause_Music(!PlayPause_Music)
  }
  const handleListMusic = () => {
    setGetListMusic(!GetListMusic)
  }

 


  return (
    <div id="App">
      <Context.Provider value={{ DataSongs, handlePlayMusic, PlayPause_Music, handleListMusic, GetListMusic, song, handleSetSong, handeleShowMusic, showMusic }}>
        <Header />
        <TitleComback />
        <Weather />
        <Music />
      </Context.Provider>
    </div>
  );
}

export default App;
