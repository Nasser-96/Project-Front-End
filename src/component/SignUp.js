import {useDispatch, useSelector} from "react-redux"
import { useState } from "react"
import {signUp} from "../reducers/users/actions"
import axios from "axios"
import "./SignUp.css"
import { useNavigate } from "react-router"
function SignUp(){

  const dispatch = useDispatch();

  const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")
  const[email,setEmail] = useState("")
  const[name,setName] = useState("")
  const[age,setAge] = useState("")
  const navigate = useNavigate()

  const[passwordErrorMsg,setPasswordErrorMsg] = useState("")
  const[requiredField,setRequiredField] = useState("")

const getPassword= (e) => {setPassword(e.target.value)}

const getConfirmPassword= (e) => {setConfirmPassword(e.target.value)}

const getEmail= (e) => {setEmail(e.target.value)}

const getName= (e) => {setName(e.target.value)}

const getAge= (e) => {setAge(e.target.value)}
function checkAllFiledNotEmpty (){
  if(name.length>0 && email.length>0 && password.length>0 && confirmPassword.length>0 && age.length>0)
  {
    console.log("it's True")
    return true 
  }
  else
    {
      if(name.length<1)
      {
        setRequiredField("This Field is Requierd")
      }
      if(email.length<1)
      {
        setRequiredField("This Field is Requierd")
      }
      if(password.length<1)
      {
        setPasswordErrorMsg("This Field is Requierd")
      }
      if(age.length<1)
      {
        setRequiredField("This Field is Requierd")
      }
      console.log("it's False rrrr")
      return false
    }
}

const CheckPassword= (e)=>{
  if(checkAllFiledNotEmpty())
  {
    if(password !== confirmPassword)
    {
      setPasswordErrorMsg("Doesn't Match")
      document.getElementById("password").value=""
      document.getElementById("confirmPassword").value=""
    }
    else{
        let data = JSON.stringify({
          name:name,
          email: email,
          password: password,
          role:"user",
          age:age
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
            dispatch(signUp(res.data))
            console.log(res)
            navigate("/")
          }
          )
        .catch(function(err){console.log(err.response.data)})
    }
  }
  else{
    console.log("it's Flase");
  }
}

return(
  <div className="Sign-Up">
              <h1 id="titleid">Sign Up</h1>
              <hr/>
              <label htmlFor="UserName" id="UserNameid">UserName</label>
              <input onChange={getName} type="UserName" id="UserName" name="UserName" placeholder={requiredField} />  
              <br/>
              <label htmlFor="Email">Email</label>
              <input onChange={getEmail} type="email" id="Email" name="Email" placeholder={requiredField}/>  
              <br/>
              <label htmlFor="password">Password</label>
              <input  onChange={getPassword} type="password" id="password" name="password" placeholder={passwordErrorMsg}/>
              <br/>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input  onChange={getConfirmPassword} type="password" id="confirmPassword" name="confirmPassword" placeholder={passwordErrorMsg}/>
              <br/>
              <label htmlFor="age">Your Age</label>
              <input  onChange={getAge} type="number" id="age" name="age"placeholder={requiredField} />
              <br/>
              <br/>
              <br/>
              <button onClick={CheckPassword} type="button" className="btn btn-success" id="btnColor" >Sign Up</button>
  </div>
    )
}

export default SignUp