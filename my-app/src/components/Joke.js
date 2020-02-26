import React from 'react'



function Joke(props){

    let question
    let answer

     if(!props.content.Question){
        question = "Can you as a valid question?"
        answer = " How am i supposed to respond?"
     }else{
        question = props.content.Question
        answer = props.content.Punchline 
     }


    return(
        <div>
            <h1> JOKE </h1>
            <h3> {question} </h3>
            <p>  {answer}  </p>
        </div>
    )
}

export default Joke