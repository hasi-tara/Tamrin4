
import React, { useState } from 'react';
import Input from './Input';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Input type="text" value={name} onChange={handleNameChange} placeholder="Enter your Name" />
          <Input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your Email" />
          <Input type="text" value={message} onChange={handleMessageChange} placeholder="Enter your Message" />
    
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
export default Form;

