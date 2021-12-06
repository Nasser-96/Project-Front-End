import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

function CreateRoom(){

    const [type , setType] = useState()
    const [numOfSeats , setNumOfSeats] = useState()
    const navigate = useNavigate()

    const roomInfo = {
        "type":type,
        "num_seats":numOfSeats
    }

    const GetRoomInfo = ()=>{
        axios.post("http://localhost:8080/rooms",roomInfo)
        .then(response=>{
            navigate("/Rooms")
        })
    }

    return(
        <>
        <div className="Sign-Up">
            <div className="createMovie">
                <h1 id="titleid">Add New Room</h1>
                <hr/>
                <label htmlFor="RoomType" id="UserNameid">Room Type</label>
                <input  type="text" id="UserName" name="UserName"  onChange={(e)=>{setType(e.target.value)}}/>  
                <br/>
                <label htmlFor="MinimumAge">Number Of Seats</label>
                <input   type="number" id="age" onChange={(e)=>{setNumOfSeats(e.target.value)}} />  
                <br/>
                <br/>
                <br/>
                <button  type="button" className="btn btn-success" id="btnColor" onClick={GetRoomInfo}>Add Room</button>
            </div>
        </div>
        </>
    )
}

export default CreateRoom