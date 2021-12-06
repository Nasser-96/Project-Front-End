import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import "./CreateMovie"

function CreateMovie(){
    const [movieName, setMovieName] = useState()
    const [description, setDescription] = useState()
    const [rating, setRating] = useState()
    const [type, setType] = useState()
    const [age, setAge] = useState()
    const [image, setImage] = useState()
    const [trailer, setTrailer] = useState()
    const navigate = useNavigate()

    const movieInfo ={
        
            "name":movieName,
            "description":description,
            "rating":rating,
            "type":type,
            "minimum_age":age,
            "img":image,
            "trailer":trailer
        
        
    }

    const GetMovieInfo = ()=>{
        axios.post("http://localhost:8080/movies",movieInfo)
        .then(response=>{
            navigate("/Movies")
        })
    }

    return(
        <>
            <div className="Sign-Up">
                <div className="createMovie">
                    <h1 id="titleid">Add New Movie</h1>
                    <hr/>
                    <label htmlFor="UserName" id="UserNameid">Movie Name</label>
                    <input  type="text" id="UserName" name="UserName"  onChange={(e)=>{setMovieName(e.target.value)}}/>  
                    <br/>
                    <label htmlFor="Description">Description</label>
                    <input  type="text" id="Email" name="Email" onChange={(e)=>{setDescription(e.target.value)}}/>  
                    <br/>
                    <label htmlFor="Rating">Rating</label>
                    <input   type="number" id="password" name="password" onChange={(e)=>{setRating(e.target.value)}}/>
                    <br/>
                    <label htmlFor="Type">Type</label>
                    <input   type="text" id="confirmPassword" name="confirmPassword" onChange={(e)=>{setType(e.target.value)}}/>
                    <br/>
                    <label htmlFor="MinimumAge">Minimum Age</label>
                    <input   type="number" id="age" name="age"onChange={(e)=>{setAge(e.target.value)}} />
                    <br/>
                    <label htmlFor="Image">Image Url</label>
                    <input   type="text" id="age" name="age" onChange={(e)=>{setImage(e.target.value)}}/>
                    <br/>
                    <label htmlFor="Trailer">Trailer</label>
                    <input   type="text" id="age" name="age"onChange={(e)=>{setTrailer(e.target.value)}} />
                    <br/>
                    <br/>
                    <br/>
                    <button  type="button" className="btn btn-success" id="btnColor" onClick={GetMovieInfo}>Add Movie</button>
                </div>
            </div>
        </>
    )
}

export default CreateMovie