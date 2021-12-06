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

    
    return(
        <>
    <div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Role</th>
              </tr>
            </thead>
            {users.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.age}</td>
                  <td>{e.role}</td>
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