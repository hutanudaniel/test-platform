import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import React, { useEffect, useState } from "react";
// import { createTodo } from "./mutations";
import { listTodos } from "./queries";
import Register from "./components/Register/register";
import SignIn from "./components/Signin/signin";
import Signout from "./components/Signout/signout";
import VerificationPage from "./components/VerificationPage/verificationPage";
import { BrowserView, MobileView } from "react-device-detect";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

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
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        component={Link}
        to="/my-account"
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        component={Link}
        to="/my-account"
      />
    </BottomNavigation>
  );
}

function App() {
  const [date, setDate] = useState(null);

  Amplify.configure(awsExports);

  // useEffect(() => {
  //   const func = async () => {
  //     await API.graphql(graphqlOperation(listTodos))
  //       .then((response) => {
  //         const todos = response.data.listTodos.items;
  //         setDate(todos);
  //         console.log("Lista todo-urilor:", todos);
  //       })
  //       .catch((error) => {
  //         console.log("Error get todo:", error);
  //       });
  //   };

  //   func();
  // }, []);

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

  console.log(date, "lista meaa");

  return (
    <div className="main">
      <BrowserRouter>
        <BrowserView>
          <DesktopNavigation />
        </BrowserView>
        <MobileView>
          <MobileNavigation />
        </MobileView>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="my-account" element={<MyAccount />} />
          {/* <Route path="list" element={<CarList />} />
          <Route path="add" element={<AddCar />} /> */}
        </Routes>
      </BrowserRouter>
      <br />
      <Register />
      <br />
      <VerificationPage />
      <br />
      ---------------------------
      <SignIn />
      <Signout />
      <br />
      <button onClick={handleGetData}>Get data</button>
    </div>
  );
}

export default App;
