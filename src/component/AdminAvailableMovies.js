import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";

function AdminAvailableMovies(){

    const [adminAvailableMovies, setAdminAvailableMovies] = useState([]) 


    useEffect(() => {
        axios
          .get("http://localhost:8080/available_movies")
          .then((response) => setAdminAvailableMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
      

    return(
        <>
         <div className="tableInfo">
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
                  <td>{e.movie.id}</td>
                  <td>{e.movie.date}</td>
                  <td>{e.movie.price}</td>
                  <td>{e.movie.movie}</td>
                  <td>{e.movie.room}</td>
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