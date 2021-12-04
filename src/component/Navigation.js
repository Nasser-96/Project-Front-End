import { useState } from 'react';
// import { useContext } from "react";
// import { MyContext } from "../App";
// import {useDispatch, useSelector} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";
import movieIcon from "./movieIcon.png"
// import { logOut } from '../reducers/users/actions';
// import { sortCarsViaSearchBar } from "../reducers/cars/actions"
import "./Navigation.css"

function Navigation() {

  // const dispatch = useDispatch();
  // const userContext = useContext(MyContext)

  // this useSelector will take the state of user reducer 
  // const state = useSelector((state)=>{
  //   return{
  //     userIsLogedIn: state.usersReducer
  //   }
  // });
  // this line checks if user is logged in or not
  // if it is true we will remove signIn, SignUp from Navbar and replace it with the name of user
// if(state.userIsLogedIn.isLogedIn){
//     if(state.userIsLogedIn.extendUser[0].role === "admin"){
//       userContext.setAdminToggle(true)
//     }else{
//       userContext.setUserName(state.userIsLogedIn.extendUser[0].name)
//       userContext.setToggle(true)
//     }
//   }

  // const logOutEvent = () =>{
  //   const action = logOut()
  //   dispatch(action)
  //   userContext.setToggle(false)
  //   userContext.setAdminToggle(false)
  // }

    // this use state is used to set the value that user types in search feild
    // const [searcValue, setSearcValue] = useState("");

    // const serachAction = ()=>{
    //   dispatch(sortCarsViaSearchBar(searcValue))
    // }
    return (
        <>
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"> {/*https://mdbootstrap.com/snippets/jquery/ascensus/1727054#html-tab-view*/ }
         <div className="logo">
            <img className="logo-img" src ={movieIcon} height="80px" width="100px"></img>
         </div>
         <div className="nav-items">
            { <li className="admin-name">{"Welcome Admin"}</li>}
            {/* for admin */}
            {<li><Link to= "/Admin">Admin</Link></li>}
            {<li><Link to= "/Users">Users</Link></li>}
            {<li><Link to= "/Tickets">Tickets</Link></li>}
            {<li ><Link to= "/">Logout</Link></li>}
            {/* for users */}
            {<li><Link to= "/">Home</Link></li>}
            {<li><Link to= "/About">About Us</Link></li>}
            {<li><Link to= "/Available-Movies">Available Movies</Link></li>}
            {<li><Link to= "/My-Tickets">My Tickets</Link></li>}
            {<li ><Link to= "/">Logout</Link></li>}

            {<li><Link to= "/Sign-In">Sign in</Link></li>}
            {<li><Link to= "/Sign-Up">Sign up</Link></li>}
         </div>
            { <div className="my-form">
            <input  type="search" className="search-data" placeholder="Search"/>
            <button className="search-btn"><i className="bi bi-search"></i></button>
            </div>}
            
         
      </nav>
        </>
    );
  }
  
  export default Navigation;