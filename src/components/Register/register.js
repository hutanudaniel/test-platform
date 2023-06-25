import React, { useState } from "react";
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";

// import * as React from 'react';
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

function Register() {

  const defaultTheme = createTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const { user } = await Auth.signUp({
      username: data.get("email"),
      password: data.get("password"),
      attributes: {
        email: data.get("email"), // optional
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
  };

  return (
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}

export default Register;

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleName = (event) =>{
  //     setUsername(event.target.value)
  // }

  // const handleEmail = (event) =>{
  //     setEmail(event.target.value)
  // }

  // const handlePassword = (event) =>{
  //     setPassword(event.target.value)
  // }

  // const handleSubmit = async (event) =>{
  //     event.preventDefault();

  //     const { user } = await Auth.signUp({
  //         username: email,
  //         password,
  //         attributes: {
  //           email, // optional
  //           // other custom attributes
  //         },
  //         autoSignIn: {
  //           // optional - enables auto sign in after user is confirmed
  //           enabled: true,
  //         },
  //       });
  // }


    // <>
    //     <form onSubmit={handleSubmit}>
    //         <label>Username:</label>
    //         <input type="text" name="username" value={username} onChange={handleName}/>
    //         <br/>
    //         <label >email</label>
    //         <input type="email" name="email" value={email} onChange={handleEmail}/>
    //         <br/>
    //         <label>Parola</label>
    //         <input type="password" name="password" value={password} onChange={handlePassword}/>
    //         <br/>
    //         <button type="submit">Creaza cont</button>
    //     </form>
    // </>