import axios from "axios";
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import "./AvailableMovies.css"
import { Button } from 'react-bootstrap';
import MovieInfo from "./MovieInfo";


function AvailableMovies() {
    const [availableMovies, setAvailableMovies] = useState([])


    useEffect(() => {
        axios
          .get("http://localhost:8080/available_movies")
          .then((response) => setAvailableMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
    return(
        <>
        
        <div className="availableMovie">
            {availableMovies.map(e=>{
                return(
                    <>
                    <div className="movieCard">
                        <input type="image" src={e.movie.img} className="movieImg"/>
                        <div>{e.movie.name}</div>
                        <div>Movie Type: {e.movie.type}</div>
                        <div>Movie Rating: {e.movie.rating}</div>  
                        <div className="btnDiv">
                            <h1>{e.id}</h1>
                            <Link to={`/Available-Movies/${e.id}`} ><Button variant="secondary">More Info</Button></Link>                     
                        </div>
                    </div>
                    </>
                
                )
            })}
        </div>
        </>
    )
}

export default AvailableMovies