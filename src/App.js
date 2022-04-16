import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
