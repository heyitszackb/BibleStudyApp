import React from 'react';
import './Dashboard.css';
import { Button, Text } from '@chakra-ui/react';

interface DashboardProps {
  handleGoToWelcomePage: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleGoToWelcomePage }) => {
  return (
    <div className="mainBox">
      <div className="navBar">
        <Text>NavBar</Text>
        <Text>Group Name </Text>
        <Button className="button" colorScheme='blue' onClick={handleGoToWelcomePage}>Log Out</Button>
      </div>
      <div>Announcement</div>
      <div>Meetings</div>
      <div>Members</div>
    </div>
  );
}

export default Dashboard;