import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.scss';
import DarkMode from '../Share/DarkMode/DarkMode';
import wifiImg from '../img/wifi.png'
function Header() {
    return (

        <div id='Header'>
            <div className='Header_top'>
               {/* <img src={wifiImg} className='wifi_header'/> */}
                <DarkMode />
            </div>
        </div>
    )
}
export default Header