import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navber from './components/Navber'
// import { SignInButton } from '@clerk/clerk-react'

function App() {
  return (
    <div className=' min-h-screen bg-slate-50'>

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