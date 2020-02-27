import React from 'react'

function Product(props){
    return(
        <div>
            <hr/>
                <p >name:         {props.name}         </p>
                <p >price:        {props.price}        </p>
                <p >Description:  {props.description}  </p>
            <hr/>
        </div>
    )
}


export default Product
