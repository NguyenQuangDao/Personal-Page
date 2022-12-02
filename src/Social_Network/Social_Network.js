import React, { useState } from "react";
import './Social_Network.scss';
import { Context } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Social_Network() {
    const [openSocial, setOpenSocial] = useState(false)
    const handleSoial = () => {
        setOpenSocial(!openSocial)
    }
    return (
        <div id="Social_Network">
            <div className="Network">
                <div className="Social_icon_all">
                    <div className={`Social_icon  ${openSocial ? 'openSocial_icon' : 'closeSocial_icon'}`}>
                        <a href='https://www.linkedin.com/in/nguy%E1%BB%85n-quang-%C4%91%E1%BA%A1o-361a72255/'><FontAwesomeIcon icon={faLinkedin} className='Icon_img' id='linkedin' /></a>
                        <a href='https://github.com/NguyenQuangDao'><FontAwesomeIcon icon={faGithubSquare} className='Icon_img' id='gitHub' /></a>
                        <a href='https://www.facebook.com/profile.php?id=100025209167322'><FontAwesomeIcon icon={faFacebookSquare} className='Icon_img' id='faceBook' /></a>
                        <a href='https://www.instagram.com/nguyenquangdao23/'><FontAwesomeIcon icon={faInstagramSquare} className='Icon_img' id='instaGram' /></a>
                    </div>
                </div>
                <div className={`Social ${openSocial ? 'openSocial' : 'closeSoial'}`} >
                    <div className='Social_text' onClick={handleSoial}>
                        Social
                    </div>
                    <div className={`phone  ${openSocial ? 'openNameAndBank' : 'closeNameAndBank'}`}>
                        <FontAwesomeIcon icon="fa-solid fa-phone-volume" />
                        <p className="number_phone">0973397126</p>
                    </div>
                    <div className={`bank  ${openSocial ? 'openNameAndBank' : 'closeNameAndBank'}`}>
                        {/* <FontAwesomeIcon icon="fa-solid fa-building-columns" /> */}
                        <div className="bank_MB" >MB </div>
                        <div className='number_bank' >222920039999</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Social_Network