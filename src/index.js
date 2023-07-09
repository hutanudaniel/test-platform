import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import swDev from "./swDev";
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register/register";
import SignIn from "./components/Signin/signin";
import VerificationPage from "./components/VerificationPage/verificationPage";
import Home from "./components/Home/Home";
import Lessons from "./components/Lessons/Lessons";
import Tests from './components/Tests/tests';
import Contact from './components/Contact/contact';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lessons/" element={<Lessons />} />
          <Route path="tests" element={<Tests />} />
          <Route path="tests/" element={<Tests />} />

          <Route path="contact" element={<Contact />} />
          <Route path="contact/" element={<Contact />} />


          <Route path="signin" element={<SignIn />} />
          <Route path="signin/" element={<SignIn />} />

          <Route path="register" element={<Register />} />
          <Route path="register/" element={<Register />} />

          <Route path="verification" element={<VerificationPage />} />
          <Route path="verification/" element={<VerificationPage />} />

          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
// swDev();
if ("serviceWorker" in navigator) {
  swDev();
}

// sw.register();
