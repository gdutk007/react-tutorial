import React from 'react'
import Product from './Product'
import productData from '../data/vschoolProducts'

// finish creating a list of products

function MyList(props){

    const list = productData.map((item)=>{
        return (
             <div>
                 <Product />
             </div>
        )
    })

    return (
        <div>
            
        </div>
    )

}