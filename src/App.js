import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home'
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import HijamaDetails from './Pages/HijamaDetails/HijamaDetails';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/hijama' element={<HijamaDetails></HijamaDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
