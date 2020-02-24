// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import {BODY} from './App';

// ReactDOM.render( <BODY/>, document.getElementById('testing1') );

// ReactDOM.render( <App/>, document.getElementById('root') );

// const numbers = [1 ,2 ,3 ,4 ,5, 6]
// const updatednums_function = numbers.map((number)=>{   
//       return <li>{number}</li>
// });


// ReactDOM.render( <MyApp/>, document.getElementById('testing1') );

// function MyApp(){
//   return (<ul>
//             {updatednums_function}
//           </ul>
//           )
// }

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import {BODY} from './App';

function MyInfo(){
  return (
    <Fragment>
    <h1><p> Gianfranco Dutka </p></h1>
    <p> Hi, I am a software developer trying to learn React! These are
      my first steps in trying to get better at this stuff. </p>
    <ul>
    <li> 1 <p>Argentina</p>   </li> 
    <li> 2 <p>California</p>  </li> 
    <li> 3 <p>Puerto Rico</p> </li> 
    </ul>
    </Fragment>
   )
}

ReactDOM.render(<MyInfo/>, document.getElementById('root'));
