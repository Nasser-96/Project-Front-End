import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';

import "./Admin.css"
import usersIcon from "./usersIcon.png"


function Admin (){

    const [user , setUser] = useState(0); 
    const [movies , setMovies] = useState(0); 
    const [rooms , setRooms] = useState(0); 
    const [availableMovies , setAvailableMovies] = useState(0); 
    const [tickets , setTickets] = useState(0); 
    
    // useEffect(() => {
        // here The API requert to get all data
    // },[]);

    return(
        <>
            <div className="adminPage">
                <div>
                    <div className="texts">Users</div>
                    <Link to="users"><input type="image" src={usersIcon} className="imgStyle"/></Link>
                    <h3>{user}</h3>
                </div>

                <div>
                    <div className="texts">Movies</div>
                    <Link to="movies"><input type="image" src="https://cdn-icons-png.flaticon.com/512/633/633832.png" className="imgStyle"/></Link>
                    <h3>{movies}</h3>
                </div>

                <div>
                    <div className="texts">Rooms</div>
                    <Link to="rooms"><input type="image" src="https://cdn-icons-png.flaticon.com/512/3993/3993984.png" className="imgStyle"/></Link>
                    <h3>{rooms}</h3>
                </div>

                <div>
                    <div className="texts">Available Movies</div>
                    <Link to="available-movies"><input type="image" src="https://cdn-icons-png.flaticon.com/512/4088/4088121.png" className="imgStyle"/></Link>
                    <h3>{availableMovies}</h3>
                </div>

                <div>
                    <div className="texts">Tickets</div>
                    <Link to="tickets"><input type="image" src="https://static.thenounproject.com/png/415558-200.png" className="imgStyle"/></Link>
                    <h3>{tickets}</h3>
                </div>
                
                
            </div>
        </>
    )
}

export default Admin