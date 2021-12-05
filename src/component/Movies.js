import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import "./Movies.css"
import { useNavigate } from "react-router";

function Movies(){

    const [movies , setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get("http://localhost:8080/movies")
          .then((response) => setMovies(response.data))
          .catch((error) => console.log(error));
      },[]);
      

    return(
        <>
    <div className="tableInfo">
        <div className="gridHead">
            <h1 className="numOfMovies">{movies.length} Movies: </h1>
            <input type="button" value="Add Movie" className="btnAdd" onClick={()=>navigate("Create")}/>
        </div>
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>description</th>
                <th>minimum_age</th>
              </tr>
            </thead>
            {movies.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.type}</td>
                  <td>{e.description}</td>
                  <td>{e.minimum_age}</td>
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