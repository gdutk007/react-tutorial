import React from 'react'


function FormComponent(props){

    return(
        <div>
        <h1> This is a test! </h1>
        <form
        onSubmit={props.handleSubmit}
        >

          <input
            name="firstName"
            value={props.data.firstName}
            placeholder="First Name"
            onChange={props.handleOnChange}
          />
          <br/>
          <input
            name="lastName"
            value={props.data.lastName}
            placeholder="Last Name"
            onChange={props.handleOnChange}
          />
          <br/>

          <input
            name="Age"
            value={props.data.Age}
            placeholder="Age"
            onChange={props.handleOnChange}
          />
          <br/>

          <select
            onChange={props.handleOnChange}
            value={props.data.location}
            name="location"
          >
            <option  value="Italy">   Italy </option>
            <option  value="China">   China</option>
            <option  value="Alaska">  Alaska</option>
          </select>
          <br/>
          <label>
          <input
          type="radio"
          checked={props.data.gender==="male"}
          name="gender"
          value="male"
          onChange={props.handleOnChange}
          /> Male</label>

          <br/>
          <label>
          <input
          type="radio"
          checked={props.data.gender==="female"}
          name="gender"
          value="female"
          onChange={props.handleOnChange}
          /> Female</label>
          <br/>
           {/* {props.restrictions} */}
          <hr/>
          <button> Submit </button>
        </form>
        </div>
    )


}

export default FormComponent