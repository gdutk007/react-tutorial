import React from 'react'

function TodoItem(props){


{/* <img src="https://pics.me.me/crawdad-crawdaddy-19246979.png"/> */}

    return (
        <div>
              <br/>
              <input type="checkbox"
              name="box"checked={props.task.completed}
              onChange={ () => props.handle(props.task.id) }
              />
              {(props.task.completed)?<strike><label for="box">{props.task.text}</label> </strike>
              : <label for="box">{props.task.text}</label> }

        </div>
    )
}




export default TodoItem