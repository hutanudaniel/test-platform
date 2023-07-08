import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Link, Navigate   } from "react-router-dom";
import Home from "./components/Home/Home";
import Lessons from "./components/Lessons/Lessons";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import React, { useEffect, useState, useContext } from "react";
// import { createTodo } from "./mutations";
import { listTodos } from "./queries";
import Register from "./components/Register/register";
import SignIn from "./components/Signin/signin";
import Signout from "./components/Signout/signout";
import VerificationPage from "./components/VerificationPage/verificationPage";
import { BrowserView, MobileView } from "react-device-detect";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon  from "@mui/icons-material/MenuBook";
import DocumentScannerIcon  from "@mui/icons-material/DocumentScanner";
import ContactPageIcon  from "@mui/icons-material/ContactPage";
import { AuthContext } from "./AuthProvider";

const todo = { name: "My Todo", description: "This is my todo" };

// const func = async () =>{
//   const resp = await API.graphql(graphqlOperation(createTodo, { input: todo })).then(response => {
//     console.log('Todo created:', response.data.createTodo);
//   })
//     .catch(error => {
//       console.log('Error creating todo:', error);
//     });

//   console.log(resp, "++++")
// }

function DesktopNavigation() {
  return (
    <>
      <Header />
    </>
  );
}

function MobileNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="mobile-navigation"
    >
      <BottomNavigationAction
        label="Acasa"
        icon={<HomeIcon />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Lectii"
        icon={<MenuBookIcon  />}
        component={Link}
        to="/lessons"
      />
      <BottomNavigationAction
        label="Teste"
        icon={<DocumentScannerIcon  />}
        component={Link}
        to="/tests"
      />
      <BottomNavigationAction
        label="Contact"
        icon={<ContactPageIcon />}
        component={Link}
        to="/contact"
      />
    </BottomNavigation>
  );
}

function App() {
  Amplify.configure(awsExports);

  const [date, setDate] = useState(null);
  const { user, isRegister, isVerification, userDetails, signOut } = useContext(AuthContext);

  // console.log(user, "user")

  const handleGetData = async () => {
    await API.graphql(graphqlOperation(listTodos))
      .then((response) => {
        const todos = response.data.listTodos.items;
        setDate(todos);
        console.log("Lista todo-urilor:", todos);
      })
      .catch((error) => {
        console.log("Error get todo:", error);
      });
  };

  // console.log(date, "lista meaa");

  if(isVerification && !user){
    return <Navigate to="/verification"  />
  }
  else if(isRegister && !user){
    return <Navigate to="/register"  />
  }
  else if(!user)
  {
    return <Navigate to="/signin"  />
  }
  return (
    <div className="main">
        {user && (
          <>
            <BrowserView>
              <DesktopNavigation />
            </BrowserView>
            <MobileView>
              <MobileNavigation />
            </MobileView>
{/* 
            <br />
            <button onClick={handleGetData}>Get data</button> */}
          </>
        )}

        {/* <br />
        <Register />
        <br /> */}
        {/* <br />
        {!user && <VerificationPage />}
        <br /> */}
        {/* {!user && navigate('signin')} */}

    </div>
  );
}

export default App;
