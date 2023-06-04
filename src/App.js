import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import { useEffect, useState } from "react";
// import { createTodo } from "./mutations";
import { listTodos } from "./queries";
import Register from "./components/Register/register";
import SignIn from "./components/Signin/signin";
import Signout from "./components/Signout/signout";
import VerificationPage from "./components/VerificationPage/verificationPage";

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
        <Header />
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
