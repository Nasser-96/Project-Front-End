import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AvailableMovies.css"

function Movies(){

    const [movies , setMovies] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:8080/movies")
          .then((response) => setMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
    return(
        <>
        <div className="availableMovie">
            {movies.map(e=>{
                return(
                    <>
                    <div className="movieCard">
                        <input type="image" src={e.img} className="movieImg"/>
                        <div>{e.name}</div>
                        <div>Movie Type: {e.type}</div>
                        <div>Movie Rating: {e.rating}</div>  
                        <div className="btnDiv">
                            <Link to={`/Available-Movies/${e.name}`} ><input type="button" value="More Information" className="btnCard" onClick={()=>{}}/></Link>
                        </div>
                    </div>
                    </>
                
                )
            })}
        </div>
        </>
    )
}

export default Movies