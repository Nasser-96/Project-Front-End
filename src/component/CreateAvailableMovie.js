import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router"


function CreateAvailableMovie(){

    const [movieId , setMovieId] = useState()
    const [roomId , setRoomId] = useState()
    const [movies, setMovies] = useState([])
    const [rooms ,setRooms] = useState([])
    const [price , setPrice] = useState([])
    const [date ,setDate] =useState()

    const navigate = useNavigate()
    
    useEffect(() => {
        axios
          .get("http://localhost:8080/movies")
          .then((response) => setMovies(response.data))
          .catch((error) => console.log(error));
      },[]);

      useEffect(() => {
        axios
          .get("http://localhost:8080/rooms")
          .then((response) => setRooms(response.data))
          .catch((error) => console.log(error));
      },[]);

      const availableMovieInfo={
            "date":date,
            "price":price,
            "movie":{"id":movieId},
            "room":{"id":roomId}
      }

      const GetAvailableInfo = ()=>{
        axios.post("http://localhost:8080/available_movies",availableMovieInfo)
        .then(response=>{
            navigate("/Admin-Available-Movies")
        })
    }

    return(
        <>
            <div className="Sign-Up">
            <div className="createMovie">
                <h1 id="titleid">Add New Available Movie</h1>
                <hr/>
                <label htmlFor="MinimumAge">Movie </label>
                <select name="cars" id="age" onChange={(e)=>{setMovieId(e.target.value)}}>
                    <option></option>
                    {movies.map(e=>{
                        return(<option value={e.id}>{e.name}</option>)
                    })}
                </select>  
                <br/>
                <label htmlFor="MinimumAge">Room</label>
                <select name="cars" id="age" onChange={(e)=>{setRoomId(e.target.value)}}>
                <option></option>
                    {rooms.map(e=>{
                        return(<option value={e.id}>{e.type}</option>)
                    })}
                </select>
                <br/>
                <label htmlFor="MinimumAge">Price</label>s
                <input   type="number" id="age" onChange={(e)=>{setPrice(e.target.value)}} />
                <be/>
                <label htmlFor="MinimumAge">Date</label>
                <input   type="date" id="age" onChange={(e)=>{setDate(e.target.value)}} />
                <br/>
                <br/>
                <br/>
                <button  type="button" className="btn btn-success" id="btnColor" onClick={GetAvailableInfo}>Add Available Movie</button>
            </div>
        </div>
        </>
    )
}

export default CreateAvailableMovie