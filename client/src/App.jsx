import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Tender from './pages/Tender';
import Vigilance from './pages/Vigilance';
import Login from './pages/Login';
import Team from './pages/Team';
import Profile from './pages/Profile';
import ApplyTender from './pages/ApplyTender';

const App = () => {
  return (
    <div className=' '>
        <ToastContainer />
        <Navbar/>
            <div className=''>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about-us' element={<About/>}/>
                  <Route path='/contact-us' element={<Contact/>}/>
                  <Route path='/services' element={<Services/>}/>
                  {/* <Route path='/team' element={<Team/>}/> */}
                  <Route path='/tender' element={<Tender/>}/>
                  <Route path='/vigilance' element={<Vigilance/>}/>
                  <Route path='/my-profile' element={<Profile/>}/>
                  <Route path='/apply-tender' element={<ApplyTender/>}/>
                  <Route path='/login' element={<Login/>}/>
              </Routes>                         
            </div>
        <Footer/>
    </div>
  )
}

export default App