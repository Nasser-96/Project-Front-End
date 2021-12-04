import { useState } from "react"
import axios from "axios"
import "./SignUp.css"
function SignUp(){

  const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")
  const[email,setEmail] = useState("")
  const[name,setName] = useState("")

  const[passwordErrorMsg,setPasswordErrorMsg] = useState("")
  const[emailErrorMsg,setEmailErrorMsg] = useState("")

const getPassword= (e) => {setPassword(e.target.value)}

const getConfirmPassword= (e) => {setConfirmPassword(e.target.value)}

const getEmail= (e) => {setEmail(e.target.value)}

const getName= (e) => {setName(e.target.value)}

const CheckPassword= (e)=>{
  if(password !== confirmPassword)
  {
    setPasswordErrorMsg("Doesn't Match")
    document.getElementById("password").value=""
    document.getElementById("confirmPassword").value=""
  }
  else{
      let data = JSON.stringify({
        email: email,
        password: password,
      })
      axios.post('http://localhost:8080/users', data, {
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
}

return(
  <div className="Sign-Up">
              <h1 id="titleid">Sign Up</h1>
              <hr/>
              <label htmlFor="UserName" id="UserNameid">UserName</label>
              <input onChange={getName} type="UserName" id="UserName" name="UserName"/>  
              <br/>
              <label htmlFor="Email">Email</label>
              <input onChange={getEmail} type="email" id="Email" name="Email" placeholder={emailErrorMsg}/>  
              <br/>
              <label htmlFor="password">Password</label>
              <input  onChange={getPassword} type="password" id="password" name="password" placeholder={passwordErrorMsg}/>
              <br/>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input  onChange={getConfirmPassword} type="password" id="confirmPassword" name="confirmPassword" placeholder={passwordErrorMsg}/>
              <br/>
              <br/>
              <button onClick={CheckPassword} type="button" className="btn btn-success" id="btnColor" >Sign Up</button>
  </div>
    )
}

export default SignUp