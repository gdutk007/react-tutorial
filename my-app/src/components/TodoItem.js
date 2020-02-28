import React from 'react'

function TodoItem(props){
    return (
        <div className="todo-item">
            <p><input type="checkbox" checked={props.task.completed}/>  {props.task.text} </p>
        </div>
    )
}
export default TodoItem