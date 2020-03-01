import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import productData from './data/vschoolProducts'
import todosData from './data/ToDoData'
import Navbar from './components/Navbar'
import Conditional from './components/Conditional'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos: todosData,
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading : true
      })
    }, 1500)
  }


  handleChange(id){
    this.setState(prevstate => {
        const updatedtodos = prevstate.todos.map(todo=>{
          if(todo.id === id){
            todo.completed = !todo.completed 
          }
          return todo
        })
        return { todos: updatedtodos}
      })  
  }
  render(){

    let todo_items = this.state.todos.map((item) => {
      return <TodoItem task={item} handle={this.handleChange}/>
      }) 

    return (
      <div>
        <Navbar/>
        {todo_items}
        {(this.state.isLoading) ? <h1> Conditional Statement !</h1> : <h1>LOADING...</h1>}         
        <h1> Some other stuff! </h1>
      </div>
    )  
  }

}

export {App}