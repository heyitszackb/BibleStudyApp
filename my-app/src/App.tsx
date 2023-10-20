import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import JoinCreate from './components/JoinCreate/JoinCreate';
import Join from './components/Join/Join';
import Create from './components/Create/Create';

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
  
  const handleGoToJoinCreate = () => {
    setCurrentPage('join-create');
  }

  const handleGoToCreate = () => {
    setCurrentPage('create');
  }

  const handleGoToJoin = () => {
    setCurrentPage('join');
  }


  return (
    <div className="App">
      {(currentPage === 'welcome') ? <WelcomeBox handleGoToLogInPage={handleGoToLogInPage} handleGoToSignUpPage={handleGoToSignUpPage}/> : null}
      {currentPage === 'sign-up' ? <SignUp handleGoToWelcomePage={handleGoToWelcomePage} handleGoToJoinCreate={handleGoToJoinCreate}/> : null}
      {currentPage === 'log-in' ? <LogIn handleGoToWelcomePage={handleGoToWelcomePage} handleGoToDashboardPage={handleGoToDashboardPage}/> : null}
      {currentPage === 'join-create' ? <JoinCreate handleGoToCreate={handleGoToCreate} handleGoToJoin={handleGoToJoin} handleGoToSignUpPage={handleGoToSignUpPage}/> : null}
      {currentPage === 'dashboard' ? <Dashboard handleGoToWelcomePage={handleGoToWelcomePage} /> : null}
      {currentPage === 'join' ? <Join handleGoToDashboardPage={handleGoToDashboardPage} handleGoToJoinCreate={handleGoToJoinCreate} /> : null}
      {currentPage === 'create' ? <Create handleGoToDashboardPage={handleGoToDashboardPage} handleGoToJoinCreate={handleGoToJoinCreate} /> : null}
    </div>
  );
}

export default App;