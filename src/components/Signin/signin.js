import React, { useState} from "react";
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";

function SignIn () {
    const [username, setUsername] = useState(null);
    // const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleName = (event) =>{
        setUsername(event.target.value)
    }

    // const handleEmail = (event) =>{
    //     setEmail(event.target.value)
    // }
    

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    

    const handleSignin = async (event) =>{
        event.preventDefault();
        
        const { user } = await Auth.signIn({
            username: username,// este de fapt email
            password,
          });
    }

    return(
        <>
            <form onSubmit={handleSignin}>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={handleName}/>
                <br/>
                {/* <label >email</label>
                <input type="email" name="email" value={email} onChange={handleEmail}/>
                <br/> */}
                <label>Parola</label>
                <input type="password" name="password" value={password} onChange={handlePassword}/>
                <br/>
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}

export default SignIn;