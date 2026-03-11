import React from 'react'
import Home from './Home'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Brand from './Components/Brands/Brand'


const App = () => {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route  path='/' element = {<Home/>} />
      <Route path='/brand' element = {<Brand/>} />
     </Routes>
   
    </BrowserRouter>
  )
}

export default App