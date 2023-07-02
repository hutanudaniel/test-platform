import React, { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";


function VerificationPage() {
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const {setIsRegister, setIsVerification} = useContext(AuthContext);
  // const navigate = useNavigate ();


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
      setIsVerification(false);
      setIsRegister(false);


    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  return (
    <>
      <label>Email-ul tau:</label>
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
