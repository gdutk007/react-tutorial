import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Main from './components/Main'
import TodoItem from './components/TodoItem'
import Checkboxes from './components/Checkboxes'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'
import MyList from './components/MyList'
import todosData from './data/ToDoData'
// now work on some things individually, this needs some style....

const URL = "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png"


class App extends React.Component {

  constructor(){
    super()
    this.state={
      answer: "yes"
    }
  }

  render(){
    return (
      <div>
        <h1> Is state important to know? {this.state.answer} </h1>
      </div>
    )
  }
}
export {App}

function MyApp2(){

  const Item = todosData.map(task => {
    return <TodoItem task={task} />
  })

  return (
    <div> 
     {Item}
     <MyList/>

      <Joke
        content = {{Question: "this is the question", Punchline: "Here is the punchline"}}
      />
      <Joke
        content = {{}}
      />
      <Joke
        content = {{Question: "this is the question", Punchline: "Here is the punchline"}}
      />
    </div>
  )
}

export {MyApp2}



















function MyApp(){
  return(
    <div>
      <main >
      <body className="stackbackground">
      <MyNavbar/> 
      <Main/>
      <Checkboxes/>
      <ContactCard
      contact = {{name: "whiskers", imgURL: URL, phone: "7867638187",email: "myemail@gmail.com"}}
            />
      <ContactCard
      contact = {{name: "whiskers", imgURL: URL, phone: "7867638187",email: "myemail@gmail.com"}}
            />
      <ContactCard
      contact = {{name: "whiskers", imgURL: URL, phone: "7867638187",email: "myemail@gmail.com"}}
            />

      <Footer/>
      </body>

      </main>
    </div>
  )
}


export default MyApp;
