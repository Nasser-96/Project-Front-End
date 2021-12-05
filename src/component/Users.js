import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./Users.css"


function Users(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:8080/users")
          .then((response) => setUsers(response.data))
          .catch((error) => console.log(error));
      },[]);

      const result = users.filter((element) => {return (element.role !== "Admin")})
    
    return(
        <>
        {console.log(result)}
    <div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            {result.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                </tr>
              </tbody>
              )
            })}
          </Table>
          </div>
        </>
    )
}

export default Users