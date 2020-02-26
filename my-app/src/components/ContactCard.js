import React from 'react'
import ReactDOM from 'react-dom'


function ContactCard(props){
    console.log(props)
    return(
        <div className="contact-card">
            <img src={props.contact.imgURL}></img>
            <h3>Name: {props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard