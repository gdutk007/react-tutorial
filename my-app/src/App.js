import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import productData from './data/vschoolProducts'
import todosData from './data/ToDoData'
import Navbar from './components/Navbar'
import Conditional from './components/Conditional'

// componentDidMount(){
//   setTimeout(()=>{
//     this.setState({
//       isLoading : true
//     })
//   }, 1500)
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       todos: todosData,
//       isLoading: false
//     }
//     this.handle = this.handle.bind(this)
//   }

//   handle(id){
//     console.log("this callback is being called!!")
//     this.setState(prevstate => {
//         const updatedtodos = prevstate.todos.map(todo=>{
//           if(todo.id === id){
//             todo.completed = !todo.completed 
//           }
//           return todo
//         })
//         return ({ todos: updatedtodos})
//       })  
//   }
  
//   render(){

//     let todo_items = this.state.todos.map((item) => {
//       return(
//         <TodoItem task={item} handle={this.handle}/>
//       ) 
       
//       }) 

//     return (
//       <div>
//         <h1>WHy isn't this displaying</h1>
//       {todo_items}
//       </div>
//     )  
//   }

// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       isLoggedIn: false,
//       messages: []

//     }
//     this.handleState = this.handleState.bind(this)
//   }

//   handleState(){
//     this.setState(state=>({
//       isLoggedIn: !state.isLoggedIn
//     }))
//   }

//   render(){
//     return (
//       <div>
//         <button onClick={this.handleState}>{(this.state.isLoggedIn)? "Log in":"Log Out"}</button>      
//         <h1> {(this.state.isLoggedIn)? "Logged Out":"Logged In"}</h1>
//       </div>  
//     )
//   }

// }



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       isDone: false,
//       todos:  todosData
//     }
//     this.handleCheck = this.handleCheck.bind(this)
//   }
  
//   handleCheck(id){
//     // we will do things here
//     this.setState((prevState)=>{
//       const updatedList = prevState.todos.map((todo)=>{
//         if(id === todo.id){
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
      
//       return{todos: updatedList}
//     })
//   }
  
//   render(){  
//     let tasks = this.state.todos.map(task=>{return(<TodoItem task={task} handle={this.handleCheck}/>)})
//     return(
//       <div>
//         {tasks}
//       </div>
//     )
//   }

// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       character: {},
//       isLoading: false
//     }
//   }

//   componentDidMount(){
//     this.setState({isLoading : true})

//     fetch("https://swapi.co/api/people/1")
//         .then(response=> response.json())
//         .then(data=>{
//           this.setState(prevState=>{
//             prevState.character = data
//             return {character: prevState.character,
//                     isLoading: false}
//           })
//         })
//   }

//   render(){

//     let name = this.state.character.name
//     let height = this.state.character.height
//     let birth_year = this.state.character.birth_year
//     let mass = this.state.character.mass

//     let text = this.state.isLoading ? "Its Loading!" : name

//     return(
//       <div>
//         <h1>This is a header! </h1>
//         <h1>{text}</h1>
//     </div>
//     )
//   }
// }


class App extends React.Component{
  constructor(){
    super()
    this.state={
      // state memebers
      firstName: "billy",
      lastName: "bob",
      isFriendly: false,
      textArea: "some default text"
    }
    this.handle = this.handle.bind(this)
  }

  handle(event){
     const {name, value, type, checked} = event.target
    // alert("the name is " + [name] + " and " + [checked]  )
     type === "checkbox" ?  this.setState( {[name]: checked} ) : this.setState({[name]: value}) 
  }

  render(){
    return (
      <div>
        <form>
          <input 
          type="text"
          value={this.state.firstName} 
          name="firstName" 
          placeholder="First"
          onChange={this.handle} />
        <br/>
        <input 
          type="text" 
          value={this.state.lastName}
          name="lastName" 
          placeholder="Last"
          onChange={this.handle} />
          <h1>{this.state.firstName }
            { this.state.lastName}</h1>

            <textarea
            name="textArea"
            value={this.state.textArea}
            onChange={this.handle}/>
            <br/>
            <label>
              <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handle}/>
              Is it friendly?</label>
        </form>
      </div>
    )
  }

}

export {App}