import { useState } from 'react'
import logo from './logo.svg'
import Navbar from './Copmonents/Navbar'
import './App.css'
import Footer from './Copmonents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h2>HELLO</h2>
    <Navbar/>
    <Footer/>
     
    </div>
  )
}

export default App
