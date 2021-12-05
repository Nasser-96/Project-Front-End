import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router";

function AdminAvailableMovies(){

    const [adminAvailableMovies, setAdminAvailableMovies] = useState([]) 

    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get("http://localhost:8080/available_movies")
          .then((response) => setAdminAvailableMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
      

    return(
        <>
         <div className="tableInfo">
          <div className="gridHead">
              <h1 className="numOfMovies">{adminAvailableMovies.length} Available Movies: </h1>
              <input type="button" value="Add Available Movie" className="btnAdd" onClick={()=>navigate("Create")}/>
          </div>
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Date</th>
                <th>Price</th>
                <th>Movie_id</th>
                <th>Room_id</th>


              </tr>
            </thead>
            {adminAvailableMovies.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.date}</td>
                  <td>{e.price}</td>
                  <td>{e.movie.id}</td>
                  <td>{e.room.id}</td>
                </tr>
              </tbody>
              )
            })}
          </Table>
          </div>  
        </>
    )
}

export default AdminAvailableMovies