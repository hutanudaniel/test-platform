import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {useNavigate   } from "react-router-dom";


function VerificationPage() {
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate ();


  const handleCode = (event) => {
    event.preventDefault();

    setCode(event.target.value);
  };

  const handleUsername = (event) =>{
    setUsername(event.target.value)
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      navigate('signin');

    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  return (
    <>
      <label>Username:</label>
      <br />
      <input type="email" value={username} onChange={handleUsername} />
      <br />

      <label>Verification Code:</label>
      <br />
      <input type="text" value={code} onChange={handleCode} />
      <br />
      
      <button onClick={confirmSignUp}>Send</button>
    </>
  );
}

export default VerificationPage;
