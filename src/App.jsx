import React from 'react'
import {BrowserRouter as Router,Routes,Route, Form} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'
import AOS from 'aos';
import "aos/dist/aos.css"

const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100
    })
    AOS.refresh();  
  },[]);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/services"} element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;