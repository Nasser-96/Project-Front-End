import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AvailableMovies.css"

function Movies(){

    const [movies , setMovies] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:8080/movies")
          .then((response) => setMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
      

    return(
        <>
    <div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Type</th>
                <th>minimum_age</th>
                <th>Trailer</th>
              </tr>
            </thead>
            {movies.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.description}</td>
                  <td>{e.rating}</td>
                  <td>{e.type}</td>
                  <td>{e.minimum_age}</td>
                  <td>{e.trailer}</td>
                </tr>
              </tbody>
              )
            })}
          </Table>
          </div>
        </> 
    )
}

export default Movies