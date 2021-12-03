import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from './component/Navigation';
import SignIn from './component/SignIn';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Sign-In" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
