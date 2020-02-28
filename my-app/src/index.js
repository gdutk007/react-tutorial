
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyApp, {MyApp2, App}  from './App'

ReactDOM.render(<App/>, document.getElementById("root"))

class Applicat extends React.Component {

    render(){
        return (
            <div>
              <h1> Code Goes Here!</h1>  
              <Header username={"gdutk007"}/>
              <Greeting/>
            </div>
        )
    }
  
  }


class Greeting extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeofdat = date.getHours()
        return(
            <div>
                <p> {timeofdat} </p>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <p> Welcome, {this.props.username}!   </p>
                </header>
            </div>
        )
    }
}


  export {Applicat}

//  ReactDOM.render(<Applicat/>, document.getElementById('root') )

// ReactDOM.render(<MyApp2/>, document.getElementById('testing1') )

// ReactDOM.render(<MyApp/>, document.getElementById('testing2') )
  


