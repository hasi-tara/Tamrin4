import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate=useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setpassword("");
    navigate("/");
  };

  return (
    <div>
      <form className="form login" onSubmit={handleSubmit}>
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
          type="password"
          value={password}
          label={"Password*"}
          onChange={handlePasswordChange}
        />

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}

export default Login;
