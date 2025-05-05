import { useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default Layout


