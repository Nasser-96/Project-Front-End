// import {useDispatch, useSelector} from "react-redux"
// import { useState } from "react"
// import { useNavigate } from 'react-router-dom';
// import {logIn} from "../reducers/users/actions"
import "./SignIn.css"
 
function SignIn() {

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const state = useSelector((state)=>{
  //   // console.log("-----------------")
  //   // console.log(state.usersReducer)
  //   // console.log("-----------------")
  //   return{
  //     userIsLogedIn: state.usersReducer
  //   }
  // });
  // const[userMail, setUserMail] = useState("")
  // const[password,setpassword] = useState("")

  // it will save the user email in the useState
  // const getUserEmail = (e) => {
  //   setUserMail(e.target.value)
  // }

  // it will save the user password in the useState
  // const getPassword= (e) => {
  //     setpassword(e.target.value)
  // }

  // after clicking the Login button the dispatch will send the user info (email,password) to the reducer to check it
  // const loginClick = () => {
  //   let userInfo = {email: userMail, pass: password}
  //   const action = logIn(userInfo)
  //   dispatch(action)
  //   if(userInfo.email === "a@a.com" && userInfo.pass === "123"){
  //     navigate("/Admin")
  //   }else {
  //     navigate("/")
  //   }
  // } 
    return (
      < div className="Sign-In">

            <div className="sign-in-div">
            <h1 id="titleid">Sign In</h1>
            <hr/>
              <input  type="email" id="email" name="email" placeholder="Email"/>  
              <br/>
              <input  type="password" id="password" name="password" placeholder="Password"/>
              <br/>
              <button  type="button" className="btn btn-success" id="btnColor">Login</button>
            </div>
      </div>
    );
  }
  
  export default SignIn;