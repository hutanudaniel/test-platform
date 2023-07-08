// import React, { useState } from "react";
// import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";

import React, {useContext} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../../AuthProvider";
import { Navigate   } from "react-router-dom";

const defaultTheme = createTheme();

function SignIn() {
  //   const [username, setUsername] = useState("");
  //   // const [email, setEmail] = useState(null);
  //   const [password, setPassword] = useState("");

  //   const handleName = (event) => {
  //     setUsername(event.target.value);
  //   };

  //   // const handleEmail = (event) =>{
  //   //     setEmail(event.target.value)
  //   // }

  //   const handlePassword = (event) => {
  //     setPassword(event.target.value);
  //   };

  //   const handleSignin = async (event) => {
  //     event.preventDefault();

  //     const { user } = await Auth.signIn({
  //       username: username, // este de fapt email
  //       password,
  //     });
  //   };

  const { signIn, setIsRegister, user} = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    // const ee = await Auth.signIn({
    //     username: data.get("email"), // este de fapt email
    //     password: data.get("password"),
    //   });
    signIn(data.get("email"),data.get("password") )

    //   console.log(ee, "useer")
  };

  if(user){
    return <Navigate to="/"  />
  }


  return (
    // <>
    //   <form onSubmit={handleSignin}>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={username}
    //       onChange={handleName}
    //     />
    //     <br />
    //     {/* <label >email</label>
    //             <input type="email" name="email" value={email} onChange={handleEmail}/>
    //             <br/> */}
    //     <label>Parola</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePassword}
    //     />
    //     <br />
    //     <button type="submit">Sign in</button>
    //   </form>
    // </>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2" onClick={(e)=> {
                    e.preventDefault();
                    setIsRegister(true);
                }}>
                  {"Nu ai un cont? Mergi catre Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
