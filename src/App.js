import React, { useEffect, useState } from 'react';
import './App.css';
import SnowFlakes from './Share/SnowFlakes/SnowFlakes';
import Header from './Header/Header';
import TitleComback from './TItle_comback/TItle_comback';
import Weather from './Weather/Weather';
import Social_Network from './Social_Network/Social_Network';
import Music from './Music/Music';
import Movie from './Movie/Movie';
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
  ///////////// dark mode //////////////
  const [darkMode, setDarkMode] = useState(false);
  const [darkLight, setDarkLight] = useState("light")
  useEffect(() => {
    if (darkLight == 'dark') {
      setDarkLight('light')
    } else {
      setDarkLight('dark')
    }
    document.getElementById('App').setAttribute('data-theme', darkLight)
  }, [darkMode])
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div id="App">
      <Context.Provider value={{ DataSongs, handlePlayMusic, PlayPause_Music, handleListMusic, GetListMusic, song, handleSetSong, handeleShowMusic, showMusic, darkMode, handleDarkMode }}>
        <SnowFlakes />
        <Header />
        <TitleComback />
        <Weather />
        <Social_Network />
        <Music />
        {/* <Movie /> */}
      </Context.Provider>
    </div>
  );
}

export default App;
