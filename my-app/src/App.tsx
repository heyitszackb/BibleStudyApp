import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleGoToLogInPage = () => {
    setCurrentPage('log-in');
  }

  const handleGoToSignUpPage = () => {
    setCurrentPage('sign-up');
  }

  const handleGoToDashboardPage = () => {
    setCurrentPage('dashboard');
  }

  const handleGoToWelcomePage = () => {
    setCurrentPage('welcome');
  }


  return (
    <div className="App">
      {(currentPage === 'welcome') ? <WelcomeBox handleGoToLogInPage={handleGoToLogInPage} handleGoToSignUpPage={handleGoToSignUpPage}/> : null}
      {currentPage === 'sign-up' ? <SignUp /> : null}
      {currentPage === 'log-in' ? <LogIn handleGoToWelcomePage={handleGoToWelcomePage} handleGoToDashboardPage={handleGoToDashboardPage}/> : null}
      {currentPage === 'dashboard' ? <Dashboard /> : null} 
    </div>
  );
}

export default App;