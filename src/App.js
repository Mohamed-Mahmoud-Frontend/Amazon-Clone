import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './NavbarAndHeader/Header'
import Navbar from './NavbarAndHeader/Navbar'
import ProductTypes from './ProductTypes/ProductTypes'
import Loginpage from './Login/Loginpage'
import SignUp from './SignUp/SignUp'
import Checkbox from './Cart/Checkbox'

// import { CartProvider } from "./CartContext";


const App = () => {
  return (
    // <CartProvider>
    <BrowserRouter>
      <Header />
      <Navbar />
      {/* <Phones /> */}
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/signin' element={<Loginpage/>}  />
      <Route path='/MobilePhones' element={<ProductTypes/>}  />
      <Route path='/signin' element={<Loginpage/>}  />
      <Route path='/signup' element={<SignUp/>}  />
      <Route path='/Checkbox' element={<Checkbox/>}  />

    </Routes>
    </BrowserRouter>
    // </CartProvider>
  )
}

export default App