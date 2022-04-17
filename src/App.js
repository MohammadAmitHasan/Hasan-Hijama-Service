import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>


        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
