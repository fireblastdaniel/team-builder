import React, { useEffect } from 'react';

const Form = props => {
    useEffect( () => {
        
    })

    return(
        <form onSubmit={event => props.handleSubmit(event)}>
        <label>
          First Name: 
          <input
            type='text' 
            name='fname'
            onChange={event => props.handleChange(event)}
          />
        </label>

        <label>
          Last Name:
          <input
            type='text'
            name='lname'
            onChange={event => props.handleChange(event)}
          />
        </label>

        <label>
          Role: 
          <input 
          type='text'
          name='role'
          onChange={event => props.handleChange(event)}
          />
        </label>

        <label>
          email:
          <input 
          type='text'
          name='email'
          onChange={event => props.handleChange(event)}
          />
        </label>
        <button>Submit</button>
      </form>
    )
}

export default Form;