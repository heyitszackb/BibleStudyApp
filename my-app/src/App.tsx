import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleLogInClick = () => {
    setCurrentPage('log-in');
  }

  const handleSignUpClick = () => {
    setCurrentPage('sign-up');
  }

  return (
    <div className="App">
      {(currentPage === 'welcome') ? <WelcomeBox handleLogInClick={handleLogInClick} handleSignUpClick={handleSignUpClick}/> : null}
      {currentPage === 'sign-up' ? <SignUp /> : null}
      {currentPage === 'log-in' ? <LogIn /> : null}
    </div>
  );
}

export default App;