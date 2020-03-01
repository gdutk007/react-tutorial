import React from 'react'

function Conditional(props){

    return(
        <div>
            <hr/>
            <hr/>
            {(props.isLoading) ? <h1> Conditional Statement !</h1> : <h1>LOADING...</h1>}
            <hr/>
            <hr/>
        </div>
    )
}

export default Conditional