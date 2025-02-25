import React, { useState } from 'react'
import axios from 'axios';

function AxiosHome() {
    const [FormData, setFormData] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(' https://jsonplaceholder.typicode.com/posts',FormData)
        console.log(response.data);
        }
        catch (error){
          console.log(error);
          
        }
   }
  
    return (
    <div>
<h2>Home Page</h2>
<div className='box'>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="text"
            value={FormData.name} placeholder='Name' 
            onChange={(e) => setFormData(e.target.value)}
            required
          />
        </div>
        <div>
          
          <input
            type="email"
            value={FormData.email} placeholder='Email'
            onChange={(e) => setFormData(e.target.value)}
            required
          /><br></br>
            <input
            type="password"
            value={FormData.password} placeholder='password'
            onChange={(e) => setFormData(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></div>

    
  )

}

export default AxiosHome