import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Button } from 'react-bootstrap';


function AdminTickets(){

    const [adminTickets , setAdminTickets] = useState([]) 

    useEffect(() => {
        axios
          .get("http://localhost:8080/tickets")
          .then((response) => setAdminTickets(response.data))
          .catch((error) => console.log(error));
      },[]);
      



      function approveTicket(id,movie_room_id,user_id){
        // ------------
        let data = JSON.stringify({
          status:"Approve",
          movie_room:{id:movie_room_id},
          user:{id:user_id}
        })
        axios.patch(`http://localhost:8080/api/changeTicketStatus/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        .then(
          function(res)
          {
            console.log(res)
            axios
          .get("http://localhost:8080/tickets")
          .then((response) => setAdminTickets(response.data))
          .catch((error) => console.log(error));
          }
          )
        .catch(function(err){console.log(err)})
        // ------------

      }

      function rejectTicket (id,movie_room_id,user_id) {
        let data = JSON.stringify({
          status:"Reject",
          movie_room:{id:movie_room_id},
          user:{id:user_id}
        })
        axios.patch(`http://localhost:8080/api/changeTicketStatus/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        .then(
          function(res)
          {
            console.log(res)
            axios
            .get("http://localhost:8080/tickets")
            .then((response) => setAdminTickets(response.data))
            .catch((error) => console.log(error));
          }
          )
        .catch(function(err){console.log(err)})
        // ------------
      }

    return(
        <>
        <div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Movie_room</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Status</th>
                <th>Action</th>

              </tr>
            </thead>
            {adminTickets.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.movie_room.id}</td>
                  <td>{e.user.id}</td>
                  <td>{e.user.name}</td>
                  <td>{e.status}</td>
                  <td>
                    { e.status !== "Pending" ? "" : 
                    <> <Button onClick={() => {approveTicket(e.id,e.movie_room.id,e.user.id)}} variant="success">Approve</Button> 
                      <Button  onClick={() => {rejectTicket(e.id,e.movie_room.id,e.user.id)}} variant="danger">Reject</Button>
                    </>
                    }
                  </td>
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