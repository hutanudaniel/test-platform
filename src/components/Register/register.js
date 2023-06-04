import React, { useState} from "react";
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";

function Register () {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleName = (event) =>{
        setUsername(event.target.value)
    }

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
              email, // optional
              // other custom attributes
            },
            autoSignIn: {
              // optional - enables auto sign in after user is confirmed
              enabled: true,
            },
          });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={handleName}/>
                <br/>
                <label >email</label>
                <input type="email" name="email" value={email} onChange={handleEmail}/>
                <br/>
                <label>Parola</label>
                <input type="password" name="password" value={password} onChange={handlePassword}/>
                <br/>
                <button type="submit">Creaza cont</button>
            </form>
        </>
    )
}

export default Register;