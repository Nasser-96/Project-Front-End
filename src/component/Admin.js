import { Link } from "react-router-dom"
import "./Admin.css"
import usersIcon from "./usersIcon.png"


function Admin (){
    return(
        <>
            <div className="adminPage">
                <div>
                    <div className="texts">Users</div>
                    <Link to="users"><input type="image" src={usersIcon} className="imgStyle"/></Link>
                </div>
                <div>
                <div className="texts">Tickets</div>
                    <Link to="tickets"><input type="image" src="https://static.thenounproject.com/png/415558-200.png" className="imgStyle"/></Link>
                </div>
                <div>
                <div className="texts">Movies </div>
                    <Link to="movies"><input type="image" src="https://static.thenounproject.com/png/415558-200.png" className="imgStyle"/></Link>
                </div>
                
            </div>
        </>
    )
}

export default Admin