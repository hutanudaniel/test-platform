import React, { useState } from "react";
import { Auth } from "aws-amplify";

function VerificationPage() {
  const [code, setCode] = useState(null);
  const [username, setUsername] = useState(null);

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
