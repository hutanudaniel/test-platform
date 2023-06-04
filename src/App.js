import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import MyAccount from './components/MyAccount/MyAccount';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';
import { useEffect } from 'react';
import { createTodo } from './mutations';
import { listTodos } from './queries';

const todo = { name: 'My Todo', description: 'This is my todo' };

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

  Amplify.configure(awsExports);

  useEffect(() => {

    const func = async () => {
      const resp = await API.graphql(graphqlOperation(listTodos)).then(
        response => {
          const todos = response.data.listTodos.items;
          console.log('Lista todo-urilor:', todos);
      })
        .catch(error => {
          console.log('Error creating todo:', error);
        });

      console.log(resp, "lista meaa")
    }


    func();
  }, [])



  const nume = "Hutanu Daniel";
  // o modificare

  return (
    <div className='main'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="my-account" element={<MyAccount />} />
          {/* <Route path="list" element={<CarList />} />
          <Route path="add" element={<AddCar />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
