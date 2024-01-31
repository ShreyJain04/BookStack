import {BrowserRouter, Routes,Route,Navigate, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import Login from './pages/Login';
import Contact from './pages/Contact';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/Navbar';
import Logout from './pages/Logout';
import Error from  './pages/Error'; 
import Footer from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Roots(){
  const location = useLocation();

  return (
      <>
      <Navbar/>
        <Routes location={location} key={location.key}> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgetPassword/>}/>
          <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
     
        </>
  );
}

function App(){
  return(
  <BrowserRouter basename={"/BookStack"}>
    <Roots/>
  </BrowserRouter> )
}
export default App;

