import React, { useContext } from "react";
import './DarkMode.scss'
import { Context } from "../../Context";
function DarkMode() {
    const {darkMode, handleDarkMode} = useContext(Context)
    return (
        <div className='Dark_light'>
            <div className={darkMode ? "dark_mode" : "light_mode"}>
                <div className="container">
                    {/* <span style={{ color: darkMode ? "grey" : "#F2B400" }}>☀︎</span> */}
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input type="checkbox" onClick={handleDarkMode} />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                    {/* <span style={{ color: darkMode ? "#c96dfd" : "grey" }} className="moon">☽</span> */}
                </div>

            </div>
        </div>
    )
}
export default DarkMode