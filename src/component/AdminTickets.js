import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";


function AdminTickets(){

    const [adminTickets , setAdminTickets] = useState([]) 

    useEffect(() => {
        axios
          .get("http://localhost:8080/adminTickets")
          .then((response) => setAdminTickets(response.data))
          .catch((error) => console.log(error));
      },[]);
      

    return(
        <>
        <div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Movie_room</th>
                <th>User_id</th>

              </tr>
            </thead>
            {adminTickets.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.movie_room}</td>
                  <td>{e.user_id}</td>
                </tr>
              </tbody>
              )
            })}
          </Table>
          </div>  
        </>
    )
}

export default AdminTickets