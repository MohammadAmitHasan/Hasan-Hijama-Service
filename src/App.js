import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home'
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout/:serviceId' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
