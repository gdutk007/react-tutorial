
import React from 'react'
import ReactDom from 'react-dom'
import Footer from './Footer'
// const arr = [1,2,3]
// const display_list = arr.map((number) => {
//       return (
//                 <li>{number}</li>
//               )
//   }); 

function MyInfo(){
  return (
     <div>
     <h1><b>Gianfranco Dutka</b></h1>
     <p> Hi, I am learning how to use react for the first time. I'm a beginner at web developement. 
       I have mostly worked with embedded devices and in C and C++.Check out my github: gdutk007@gmail.com.
       For any further inquiries message me or call 786-786-8187.</p>
     <ul>
     <li>argentina</li>
     <li>brasil</li>
     <li>france</li>
     </ul> 
     <Footer/>   
     </div>
  )
}

export default MyInfo