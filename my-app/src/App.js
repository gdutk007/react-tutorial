import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Main from './components/Main'
import TodoItem from './components/TodoItem'
import Checkboxes from './components/Checkboxes'

// now work on some things individually, this needs some style....

function MyApp(){
  return(
    <div>
      <main >
      <body className="stackbackground">
      <MyNavbar/> 
      <Main/>
      <Checkboxes/>
      <Footer/>
      </body>

      </main>
    </div>
  )
}


export default MyApp;