import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router";

function Rooms(){
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:8080/rooms")
          .then((response) => setRooms(response.data))
          .catch((error) => console.log(error));
      },[]);
      
      const navigate = useNavigate()

    return(
        <>
<div className="tableInfo">
        <div className="gridHead">
          <h1 className="numOfMovies">{rooms.length} Rooms: </h1>
          <input type="button" value="Add Room" className="btnAdd" onClick={()=>navigate("Create")}/>
        </div>
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Num_seats</th>
                <th>Type</th>
                
              </tr>
            </thead>
            {rooms.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.num_seats}</td>
                  <td>{e.type}</td>
                </tr>
              </tbody>
              )
            })}
          </Table>
          </div>
        </>
    )
}

export default Rooms