import { Link } from "react-router-dom"
import axios from "axios";
import React, { useEffect, useState } from 'react';

import "./Admin.css"
import usersIcon from "./usersIcon.png"


function Admin (){

    const [user , setUser] = useState(0); 
    const [movies , setMovies] = useState(0); 
    const [rooms , setRooms] = useState(0); 
    const [availableMovies , setAvailableMovies] = useState(0); 
    const [tickets , setTickets] = useState(0); 
    
    useEffect(() => {
        
        axios.get('http://localhost:8080/api/getAdminPageData')
        .then(
            function(res)
            {
                setUser(res.data.users)
                setMovies(res.data.movies)
                setRooms(res.data.rooms)
                setAvailableMovies(res.data.availableMovies)
                setTickets(res.data.tickets)
            }
            )
        .catch(function(err){console.log(err)})
    },[]);

    return(
        <>
            <div className="adminPage">
                <div>
                    <div className="texts">Users</div>
                    <Link to="/Users"><input type="image" src={usersIcon} className="imgStyle"/></Link>
                    <h3>{user}</h3>
                </div>

                <div>
                    <div className="texts">Movies</div>
                    <Link to="/Movies"><input type="image" src="https://cdn-icons-png.flaticon.com/512/633/633832.png" className="imgStyle"/></Link>
                    <h3>{movies}</h3>
                </div>

                <div>
                    <div className="texts">Rooms</div>
                    <Link to="/Rooms"><input type="image" src="https://cdn-icons-png.flaticon.com/512/3993/3993984.png" className="imgStyle"/></Link>
                    <h3>{rooms}</h3>
                </div>

                <div>
                    <div className="texts">Available Movies</div>
                    <Link to="/Available-movies"><input type="image" src="https://cdn-icons-png.flaticon.com/512/4088/4088121.png" className="imgStyle"/></Link>
                    <h3>{availableMovies}</h3>
                </div>

                <div>
                    <div className="texts">Tickets</div>
                    <Link to="/Tickets"><input type="image" src="https://static.thenounproject.com/png/415558-200.png" className="imgStyle"/></Link>
                    <h3>{tickets}</h3>
                </div>
                
                
            </div>
        </>
    )
}

export default Admin