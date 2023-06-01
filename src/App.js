import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import MyAccount from './components/MyAccount/MyAccount';

function App() {



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
