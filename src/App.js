import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from './component/Navigation';
import SignIn from './component/SignIn';
import AvailableMovies from './component/AvailableMovies';
import MovieInfo from './component/MovieInfo';
import Admin from './component/Admin';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Sign-In" element={<SignIn/>} />
        <Route path="/Available-Movies" element={<AvailableMovies/>} />
        <Route path="/Available-Movies/:movieName" element={<MovieInfo/>} />
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
