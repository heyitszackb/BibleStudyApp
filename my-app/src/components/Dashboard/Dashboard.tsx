import React from 'react';
import './Dashboard.css';
import { Button, Text } from '@chakra-ui/react';

import { Meetings } from './Meetings/Meetings';
import { Members } from './Members/Members';
import { Announcement } from './Announcement/Announcement';

interface DashboardProps {
  handleGoToWelcomePage: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleGoToWelcomePage }) => {
  return (
    <div className="mainBox">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#9a78d8', color: '#fff', width: '100%' }}>
            <Button className="button" colorScheme='purple' onClick={handleGoToWelcomePage}>Log Out</Button>
            <Text>Group Name </Text>
            <button>Logout</button>
      </div>
      <Announcement />
      <Meetings />
      <Members />
    </div>
  );
}

export default Dashboard;