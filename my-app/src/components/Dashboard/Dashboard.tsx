import React from 'react';
import './Dashboard.css';
import { Button } from '@chakra-ui/react';

interface DashboardProps {
  handleGoToWelcomePage: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleGoToWelcomePage }) => {
  return (
    <div className="mainBox">
      Dashboard Page
      <Button colorScheme='blue' onClick={handleGoToWelcomePage}>Log Out</Button>
    </div>
  );
}

export default Dashboard;