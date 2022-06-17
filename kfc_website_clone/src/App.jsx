import { useState } from 'react'
import logo from './logo.svg'
import Navbar from './Copmonents/Navbar'
import './App.css'
import Footer from './Copmonents/Footer'
import KfcDeal from './Pages/KfcDeal'

import Login from './pages/Login';
import Menu from './pages/Menu';
import Home from './Pages/Home'

import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(true)
  const spinner=document.getElementById("spinner")
  const location=useLocation()
  if(spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setLoading(false)
  },2500)
  }
    return (
      !loading && (
        <div className="App">
          {location.pathname==="/Login" ? null : <Navbar />}
           {/* <Navbar /> */}
           <Routes>
              {/* <Route path='/' element={<Home/>}/> */}
              <Route path='/Login' element={<Login/>}/>
              <Route path='/menu' element={<Menu/>}/> 
              <Route path='/deals' element={<KfcDeal/>}/>       
           </Routes>
           {location.pathname==="/Login" ? null : <Footer />}
        </div>
      )
    );
  }
  
  export default App;
  
