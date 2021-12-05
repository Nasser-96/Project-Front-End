import {useDispatch, useSelector} from "react-redux"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";
import movieIcon from "./movieIcon.png"
import {logOut} from "../reducers/users/actions"

import "./Navigation.css"

function Navigation() {


  const dispatch = useDispatch();
  const state = useSelector((state)=>{
    console.log(state.usersReducer.isLogedIn)
    return{
      userIsLogedIn: state.usersReducer
    }
  });

  const logOutUser = ()=>{
    dispatch(logOut())
  }


    return (      
        <>
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"> {/*https://mdbootstrap.com/snippets/jquery/ascensus/1727054#html-tab-view*/ }
         <div className="logo">
            <img className="logo-img" src ={movieIcon} height="80px" width="100px"></img>
         </div>
         <div className="nav-items">
            {state.userIsLogedIn.isLogedIn && <li className="admin-name">Welcome {state.userIsLogedIn.extendUser.name}</li>}
            {/* for admin */}
            {(state.userIsLogedIn.extendUser.role ==="Admin") && <li><Link to= "/Admin">Admin</Link></li>}
            {(state.userIsLogedIn.extendUser.role ==="Admin") &&<li><Link to= "/Users">Users</Link></li>}
            {(state.userIsLogedIn.extendUser.role ==="Admin") &&<li><Link to= "/Movies">Movies</Link></li>}
            {(state.userIsLogedIn.extendUser.role ==="Admin") &&<li><Link to= "/Rooms">Rooms</Link></li>}
            {(state.userIsLogedIn.extendUser.role ==="Admin") &&<li><Link to= "/Admin-Tickets">Tickets</Link></li>}
            {(state.userIsLogedIn.extendUser.role ==="Admin") &&<li><Link to= "/Admin-Available-Movies">Available Movies</Link></li>}
            {/* for users */}
            {(state.userIsLogedIn.extendUser.role !=="Admin") && <li><Link to= "/">Home</Link></li>}
            {(state.userIsLogedIn.extendUser.role !=="Admin") && <li><Link to= "/About">About Us</Link></li>}
            { state.userIsLogedIn.extendUser.role !=="Admin"&&<li><Link to= "/Available-Movies">Available Movies</Link></li>}
            {((state.userIsLogedIn.isLogedIn || state.userIsLogedIn.extendUser.role ==="user")&& state.userIsLogedIn.extendUser.role !=="Admin")&&<li><Link to= "/My-Tickets">My Tickets</Link></li>}
            {state.userIsLogedIn.isLogedIn && <li onClick={logOutUser}><Link to= "/">Logout</Link></li>}

            {!state.userIsLogedIn.isLogedIn &&<li><Link to= "/Sign-In">Sign in</Link></li>}
            {!state.userIsLogedIn.isLogedIn &&<li><Link to= "/Sign-Up">Sign up</Link></li>}
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