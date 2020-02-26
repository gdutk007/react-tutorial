import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MyNavbar from './components/Navbar'
import Main from './components/Main'

// now work on some things individually, this needs some style....

function MyApp(){
  return(
    <div>
      <MyNavbar/> 
      <Main/>
      <Footer/>
    </div>
  )
}


export default MyApp;