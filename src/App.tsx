import React from 'react';
import './App.css';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import SignupPage from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <ForgotPassword />
    </div>
  );
}

export default App;
