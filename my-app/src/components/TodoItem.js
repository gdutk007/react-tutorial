import React from 'react'

function TodoItem(props){


    return (
        <div>
              <input type="checkbox"
              name="box"checked={props.task.completed}
              onChange={ () => props.handle(props.task.id) }
              />
              <label for="box">{props.task.text}</label>

        </div>
    )
}




export default TodoItem