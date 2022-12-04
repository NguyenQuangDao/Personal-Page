import React, { useContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.scss'
import { Context } from '../Context';
import imgCloud from '../img/cloud_With_sun.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');
    // const [dataLocation, setDataLocation] = useState([])
    const WeatherAPI = {
        key: "8f53e78d116048d874bdd203efab0835",
        apiURL: " https://api.openweathermap.org/data/2.5/",
    }
    ////////// removeAccents ///////////
    function removeAccents(str) {
        var AccentsMap = [
          "aàảãáạăằẳẵắặâầẩẫấậ",
          "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
          "dđ", "DĐ",
          "eèẻẽéẹêềểễếệ",
          "EÈẺẼÉẸÊỀỂỄẾỆ",
          "iìỉĩíị",
          "IÌỈĨÍỊ",
          "oòỏõóọôồổỗốộơờởỡớợ",
          "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
          "uùủũúụưừửữứự",
          "UÙỦŨÚỤƯỪỬỮỨỰ",
          "yỳỷỹýỵ",
          "YỲỶỸÝỴ"    
        ];
        for (var i=0; i<AccentsMap.length; i++) {
          var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
          var char = AccentsMap[i][0];
          str = str.replace(re, char);
        }
        return str.trim();
      }
    //// search location weather //////
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${WeatherAPI.apiURL}weather?q=${removeAccents(query)}&unitts=metric&APPID=${WeatherAPI.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery("")
                })
        }
    }

    ////////// search location //////////
    // const geoApiOptions = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'ac3b21571fmshb391cae8c53a3d9p1d2119jsn2a76164dbe69',
    //         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //     }
    // };
    const handleInputValue = (valueInput) => {
        // fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?&minPopulation=500000&limit=10&location=%2B41.40338%2B2.17403&asciiMode=true&namePrefix=${valueInput}`, geoApiOptions)
        //     .then(response => response.json())
        //     .then(response => {
        //          setDataLocation(response.data) 
        //          console.log(response);
        //     })
        //     .catch(err => console.error(err));
            // setWeather(dataLocatio)
        setQuery(valueInput)
    }

    return (
        <div id="Weather">
            <div className="Weather_Header">
                {/* weather API */}
                {(typeof weather.main != "undefined") ? (
                    <>
                        <div className="Weather_Location">
                            <div className="Weather_from">
                                <div className="Name_Location">
                                    <div className="Name_from">
                                        {weather.name}
                                    </div>
                                </div>
                                <div className="Parameter">
                                    <div className="Parameter_all">
                                        <div className="foresight">
                                            <FontAwesomeIcon icon="fa-solid fa-eye" className="icon_parameter" />
                                            <div className="text_foresight">{weather.visibility / 1000}km</div>
                                        </div>
                                        <div className="wind_speed">
                                            <FontAwesomeIcon icon="fa-solid fa-wind" className="icon_parameter" />
                                            <div className="text_foresight">{weather.wind.speed} m/s</div>
                                        </div>
                                        <div className="humidity">
                                            <FontAwesomeIcon icon="fa-solid fa-droplet" className="icon_parameter" />
                                            <div className="text_foresight">{weather.main.humidity}%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Search_Weather">
                                <input
                                    placeholder="Địa điểm ..."
                                    className="Search_Weather_input"
                                    type="text"
                                    onChange={e => { handleInputValue(e.target.value) }}
                                    value={query}
                                    onKeyPress={search}
                                />
                            </div>
                        </div>

                        <div className="Weather_Api">
                            <div className="Icon_Weather">
                                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} className="icon_weather" />
                            </div>
                            <div className="Comment">
                                <div className="Comment_text">
                                    {weather.weather[0].description}
                                </div>
                            </div>
                            <div className="Temperature">
                                <div className="degC">
                                    {Math.round(weather.main.temp - 273.15)}&deg;C
                                </div>
                            </div>
                            <div className="H_or_L_Temperature">
                                <div className="H_or_L">
                                    H {Math.round(weather.main.temp_max - 273.15)}&deg;C /L {Math.round(weather.main.temp_min - 273.15)}&deg;C
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="Weather_Location">
                            <div className="Weather_from">
                                <div className="Name_Location">
                                    <div className="Note">
                                        1 số nơi có thể không chứa dấu cách (VD: HaiPhong)
                                    </div>
                                    <div className="dots-7"></div>
                                </div>
                            </div>
                            <div className="Search_Weather">
                                <input
                                    placeholder="Địa điểm ..."
                                    className="Search_Weather_input"
                                    type="text"
                                    onChange={e => { handleInputValue(e.target.value) }}
                                    value={query}
                                    onKeyPress={search}
                                />
                            </div>
                        </div>
                        <div className="Weather_Api">
                            <div className="Icon_Weather_none">
                                <div className="Cloud_svg">
                                    <img src={imgCloud} id="Cloud_svg" />
                                </div>
                            </div>
                            <div className="Comment">
                                <div className="Comment_text_none">
                                    Hãy nhập vị trí bạn muốn xem thời tiết (VD: hà nội)
                                </div>
                            </div>
                            <div className="H_or_L_Temperature">
                                <div className="H_or_L">
                                    {/* ( hãy nhập đúng tên nơi bạn muốn tìm ) */}
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}
export default Weather