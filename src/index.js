import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import swDev from "./swDev";
import { AuthProvider } from './AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
// swDev();
if ("serviceWorker" in navigator) {
  swDev();
}

// sw.register();
