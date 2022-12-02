import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './TItle_comback.scss'
import Avata from '../img/avata.jpg'
function TitleComback(props) {
    //////// Clock ///////
    let time = new Date().toLocaleTimeString('en-US', { hour12: false });
    let today = new Date().toLocaleDateString("en-GB");
    const [Ctime, setCtime] = React.useState(time);
    const [date, setDate] = React.useState(today);
    const updateTime = () => {
        time = new Date().toLocaleTimeString('en-US', { hour12: false });
        setCtime(time);
    }
    setInterval(updateTime, 1000);

    //////// date ///////
    // const DateBuilder = (d) => {
    //     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     let month = months[d.getMonth()]
    //     let year = d.getFullYear()
    //     return ` ${month}, ${year}`
    // }

    return (
        <div id='TitleComback'>
            <div className='Avata'>
                <div className='Img_Avata'>
                    <img src={Avata} id='Avt_me' />
                </div>
                <div className='date_time'>
                    <div className='Date'>{date}</div>
                    <div className='Time'>{Ctime}</div>
                </div>
                <div className='Title'>
                    <div className='title_name'>Nguyễn Quang Đạo</div>
                    <div className='title_mail'>anhdao2292003cxz@gmail.com</div>
                    <div className='welcome'>Welcome Back</div>
                </div>
            </div>
        </div>
    )
}
export default TitleComback