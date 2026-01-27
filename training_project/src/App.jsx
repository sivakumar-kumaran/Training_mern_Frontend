
import React from 'react'
import Profile from './componets/Profile'
import State from './hooks/State'
import Parents from './componets/Parents'
import Form from './hooks/Form'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './componets/Navbar'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product_details/:id' element={<ProductDetails/>}/>
    </Routes>
    
    </>
  )
}

export default App
