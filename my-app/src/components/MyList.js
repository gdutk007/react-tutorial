import React from 'react'
import Product from '../components/Product'
import productData from '../data/vschoolProducts'

// finish creating a list of products

function MyList(){
    
    const list = productData.map(item => {
        return <Product name={item.name} price={item.price} description={item.description} />
    })

    return (
        <div>
            <p> This is a test  </p>
            <hr/>
            <p>{list}</p>
            <hr/>
        </div>
    )

}

export default MyList