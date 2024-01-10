import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import ClientPage from './Pages/ClientPage'
import ContactUsPage from './Pages/ContactUsPage'
import OngoingPage from './Pages/OngoingPage'
import CompletedPage from './Pages/CompletedPage'
import ScrollToTop from './ScroolToTop'

function MainRoute() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/service' element={<ServicePage/>}/>
            <Route path='/client' element={<ClientPage/>}/>
            <Route path='/contact' element={<ContactUsPage/>}/>
            <Route path='/ongoing' element={<OngoingPage/>}/>
            <Route path='/completed' element={<CompletedPage/>}/>
        </Routes>
        <ScrollToTop/>
    </Router>  
  )
}

export default MainRoute
