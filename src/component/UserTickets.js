import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux"

function UserTickets(){

    const state = useSelector((state)=>{
        
        return{
        userIsLogedIn: state.usersReducer
        }
    });

    const [userTickets , setUserTickets] = useState([]) 

    useEffect(() => {
        if(state.userIsLogedIn.extendUser.id != undefined)
        {
            axios
            .get(`http://localhost:8080/api/getUserTickets/${state.userIsLogedIn.extendUser.id}`)
            .then((response) => setUserTickets(response.data))
            .catch((error) => console.log(error));
        }
        
    },[]);


    return(
        <>
        <div className="tableInfo">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Movie Name</th>
                    <th>Room Type</th>
                    <th>Price</th>
                    <th>Ticket Status</th>
                </tr>
                </thead>
                {userTickets.map(e=>{
                    return(
                    <tbody>
                    <tr>
                    <td>{e.id}</td>
                    <td>{e.movie_room.movie.name}</td>
                    <td>{e.movie_room.room.type}</td>
                    <td>{e.movie_room.price}</td>
                    <td>{e.status}</td>
                    </tr>
                </tbody>
                )
                })}
            </Table>
        </div> 
        </>
    )
}

export default UserTickets