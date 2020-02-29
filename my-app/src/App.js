import React, {  Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import productData from './data/vschoolProducts'
import todosData from './data/ToDoData'



class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
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
        <h1> Dump the quaaludesss brooo </h1>
        {todo_items}
        <h1>  </h1>
      </div>
    )  
  }

}

export {App}