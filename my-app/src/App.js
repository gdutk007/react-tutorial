import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Main from './components/Main'
import Checkboxes from './components/Checkboxes'
// now work on some things individually, this needs some style....

function MyApp(){
  return(
    <div>
      <MyNavbar/> 
      <Main/>
      <Checkboxes/>
      <Footer/>
    </div>
  )
}


export default MyApp;