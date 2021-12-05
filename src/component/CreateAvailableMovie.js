import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"


function CreateAvailableMovie(){

    const [movieId , setMovieId] = useState()
    const [roomId , setRoomId] = useState()
    const [movies, setMovies] = useState([])
    const [rooms ,setRooms] = useState([])
    const [price , setPrice] = useState([])

    
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
          "price":price,
          "movie":{"id":movieId},
          "room":{"id":roomId}
      }

      const GetAvailableInfo = ()=>{
        axios.post("http://localhost:8080/available_movies",availableMovieInfo)
        .then(response=>{
            console.log(response.data);
        })
    }

    return(
        <>
            <div className="Sign-Up">
            <div className="createMovie">
                <h1 id="titleid">Add New Available Movie</h1>
                <hr/>
                <label htmlFor="MinimumAge">Movie ID</label>
                <select name="cars" id="age" onChange={(e)=>{setMovieId(e.target.value)}}>
                    <option></option>
                    {movies.map(e=>{
                        return(<option value={e.id}>{e.id}-{e.name}</option>)
                    })}
                </select>  
                <br/>
                <label htmlFor="MinimumAge">Room ID</label>
                <select name="cars" id="age" onChange={(e)=>{setRoomId(e.target.value)}}>
                <option></option>
                    {rooms.map(e=>{
                        return(<option value={e.id}>{e.id}-{e.type}</option>)
                    })}
                </select>
                <label htmlFor="MinimumAge">Price</label>
                <input   type="number" id="age" onChange={(e)=>{setPrice(e.target.value)}} /> 
                <br/>
                <br/>
                <br/>
                <button  type="button" className="btn btn-success" id="btnColor" onClick={GetAvailableInfo}>Add Room</button>
            </div>
        </div>
        </>
    )
}

export default CreateAvailableMovie