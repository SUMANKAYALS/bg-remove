import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navber from './components/Navber'
import { ToastContainer, toast } from 'react-toastify';
// import { SignInButton } from '@clerk/clerk-react'

function App() {
  return (
    <div className=' min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right' />
      <Navber />
      {/* <SignInButton /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
    </div>
  )
}

export default App