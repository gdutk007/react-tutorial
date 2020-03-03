import React from 'react'

function TodoItem(props){
    {/* {(props.task.completed)?<strike><label for="box">{props.task.text}</label> </strike>
    : <label for="box">{props.task.text}</label> } */}


{/* <img src="https://pics.me.me/crawdad-crawdaddy-19246979.png"/> */}

    let word = props.task.canEat ? "checked" : "not-checked"

    return (
        <div>
              <label>
              <input
              type="checkbox"
              name={props.task.name}
              value={props.task.name}
              checked={props.task.canEat}
              onChange={ () => props.handle(props.task.id) }
              /> {props.task.text}  ({word})</label>
        </div>
    )
}






export default TodoItem