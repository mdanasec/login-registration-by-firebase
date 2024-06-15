import React from 'react'
import SignUp from './Component/SignUp'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Login from './Component/Login'
import Page from './Component/Page'


const App = () => {
  return (
   
        <BrowserRouter>
        
            <Routes>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/' element={<Login/>}/>
                <Route path='/page' element={<Page/>}/>
            </Routes>
        </BrowserRouter>
      
   
  )
}

export default App
