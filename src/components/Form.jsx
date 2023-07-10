import React, { useState } from "react";
import Input from "./Input";
import '../styles/Form.css'
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


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
    setName("");
    setEmail("");
    setMessage("");
    // navigate("/");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          label={"Name*"}
          onChange={handleNameChange}
        />
        <Input
          type="email"
          value={email}
          label={"Email*"}
          onChange={handleEmailChange}
        />
        <Input
          type="text"
          value={message}
          label={"Message"}
          onChange={handleMessageChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
