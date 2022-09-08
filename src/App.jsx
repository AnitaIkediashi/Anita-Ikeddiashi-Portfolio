import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Features from './components/features/Features'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Features/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App