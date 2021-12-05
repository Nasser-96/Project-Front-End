import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from './component/Navigation';
import SignIn from './component/SignIn';
import AvailableMovies from './component/AvailableMovies';
import MovieInfo from './component/MovieInfo';
import Admin from './component/Admin';
import SignUp from './component/SignUp';
import Users from './component/Users';
import Movies from './component/Movies';
import Rooms from './component/Rooms';
import Home from './component/Home';
import AdminAvailableMovies from './component/AdminAvailableMovies';
import AdminTickets from './component/AdminTickets';
import UserTickets from './component/UserTickets';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sign-In" element={<SignIn/>} />
        <Route path="/Sign-Up" element={<SignUp/>} />
        <Route path="/Available-Movies" element={<AvailableMovies/>} />
        <Route path="/Available-Movies/:AvailableMovies_id" element={<MovieInfo/>} />
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Rooms" element={<Rooms/>}/>
        <Route path="Admin-Available-Movies" element={<AdminAvailableMovies/>}/>
        <Route path="/Admin-Tickets" element={<AdminTickets/>}/>
        <Route path="/My-Tickets"element={<UserTickets/>}/>
      </Routes>
    </div>
  );
}

export default App;
