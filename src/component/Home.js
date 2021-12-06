import { useState, useEffect} from "react";
import "./Home.css"
import axios from "axios";

function Home(){

    const [availableMovies, setAvailableMovies] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:8080/movies`)
          .then((response) => setAvailableMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
    return(
        
        <>
            <h1 className="head">Movies List: </h1>
            <br/>
            <br/>
            <div className="movieGrid">
                {availableMovies.map(e=>{
                    return(
                        <>
                            <input type="image" src={e.img} className="imgMargin"/>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Home