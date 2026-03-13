import React from 'react'
import Home from './Home'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Brand from './Components/Brands/Brand'
import Navbar from './Home/Navbar/Navbar'
import Footer from './Home/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route  path='/' element = {<Home/>} />
      <Route path='/brand' element = {<Brand/>} />
     </Routes>
     <Footer/>
   
    </BrowserRouter>
  )
}

export default App