import Head from 'next/head'
import { useState } from 'react'

const POST_URL = 'http://localhost:1337/api/form-submissions'


export default function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      "data": {
        firstName,
        lastName
      }
    };

    (async () => {
      const rawResponse = await fetch(POST_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const content = await rawResponse.json();

    })();

  };
  
  return (

    <div>

    <h1>Contact Us</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name</label>
      <input 
        type="text" 
        onChange={e => setFirstName(e.target.value) } 
        value={firstName} 
        id="firstName" 
        />

      <label htmlFor="last">Last Name</label>
      <input
        type="text" 
        onChange={e => setLastName(e.target.value) } 
        value={lastName} 
        id="lastName"  />

      <button type="submit">Submit</button>
    </form>

    </div>
  )
}

