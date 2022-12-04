import React, { useState } from "react";
import './Movie.scss';
// import { Context } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)

function Movie() {
    // const [movie, setMovie] = useState('')
    // const [dataMovie, setDataMovie] = useState([])
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'ac3b21571fmshb391cae8c53a3d9p1d2119jsn2a76164dbe69',
    //         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    //     }
// };
// const handleFindMovie = () => {
//     if (evt.key === "Enter") {
//         fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${movie}`, options)
//         .then(response => response.json())
//         .then(response => setDataMovie(response))
//         .catch(err => console.error(err));
//         setMovie('')
//         console.log(dataMovie);
//     }
// }

return (
    <div id="Movie">
        <div className="Find_Movie">
            <div></div>
            <div className="input_search_Movie">
                <input
                    placeholder="Tìm kiếm phim... lười chưa làm:(( "
                    id="search_Movie"
                    // value={movie}
                    // onKeyPress={handleFindMovie}
                    // onChange={e => setMovie(e.target.value)}
                />
                {/* <div className="search_icon" onClick={e=>handleFindMovie(e)}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="icon_search" />
                    </div> */}
            </div>
        </div>

    </div>
)
}
export default Movie