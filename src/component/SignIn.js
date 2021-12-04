import { useState } from "react"
import axios from "axios";
import "./SignIn.css"
 
function SignIn() {

  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")

  // it will save the user email in the useState
  const getUserEmail = (e) => {
    setEmail(e.target.value)
  }

  // it will save the user password in the useState
  const getPassword= (e) => {
    setPassword(e.target.value)
  }
  
  // [Saad]: GET request via Axios (email&pass)
  const loginClick = () => {
      let data = JSON.stringify({
        email: email,
        password: password
      })
      axios.post('http://localhost:8080/users/login', data, {
          headers: {
              'Content-Type': 'application/json',
          }
      }
      )
      .then(
        function(res)
        {
          console.log(res)
        }
        )
      .catch(function(err){console.log(err.response.data)})
  } 
    return (
      < div className="Sign-In">

            <div className="sign-in-div">
            <h1 id="titleid">Sign In</h1>
            <hr/>
              <label htmlFor="email">Email</label>
              <input onChange={getUserEmail} type="email" id="email" name="email" />  
              <br/>
              <label htmlFor="password">Password</label>
              <input onChange={getPassword} type="password" id="password" name="password"/>
              <br/>
              <br/>
              <button  onClick={loginClick} type="button" className="btn btn-success" id="btnColor">Login</button>
            </div>
      </div>
    );
  }
  
  export default SignIn;