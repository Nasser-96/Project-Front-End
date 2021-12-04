import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { useState,useEffect } from "react";
import axios from "axios";
import "./MovieInfo.css"

function MovieInfo(info){
    const {movieName} = useParams();
    const [availableMovies, setAvailableMovies] = useState([])


    useEffect(() => {
        axios
          .get("http://localhost:8080/available_movies")
          .then((response) => setAvailableMovies(response.data))
          .catch((error) => console.log(error));
      },[]);

    
    const filtrationOfMovie = availableMovies.filter(e=>e.movie.name === movieName)
    return(
        <>
        {filtrationOfMovie.map(e=>{
            
            return(
                <>
                <div className="movieDetCard">
                    <iframe width="600" height="315"
                        src={`https://www.youtube.com/embed/${e.movie.trailer}`} className="part1OfCard"/ >
                    {/* </iframe> */}
                    <div >
                        <input type={"image"} src={e.movie.img} className="imgSize"/>
                        <div className="des">{e.movie.name}</div>
                        <div>{e.movie.description}</div>
                        <div>{e.movie.rating}</div>
                        <div>{e.movie.type}</div>
                        <div> Minimum Age: {e.movie.minimum_age}</div>
                        <div>Price: {e.price}SR</div>
                        <input type="button" value="Add To Ticket" className="btnCard"/>
                    </div>
                </div>
                </>
            )
        })}
        </>
    )
}

export default MovieInfo