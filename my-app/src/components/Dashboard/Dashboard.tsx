import React from 'react';
import './Dashboard.css';
import { Button, Divider, Text } from '@chakra-ui/react';

import Meetings from './Meetings/Meetings';
import Members from './Members/Members';
import Announcement from './Announcement/Announcement';

interface DashboardProps {
  handleGoToWelcomePage: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleGoToWelcomePage }) => {
  return (
    <div className="mainBox">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#522D72', color: '#fff', width: '100%' }}>
            <div style={{width: '400px', display: 'flex',justifyContent: 'left'}}>
              <Button style={{backgroundColor: '#C1A027'}} className="button" onClick={handleGoToWelcomePage}>Log Out</Button>
            </div>
            <Text>Small Group Study of James</Text>
            <div style={{width: '400px', display: 'flex',justifyContent: 'right'}}>
              <Button variant="ghost" style={{color: '#C1A027'}} onClick={() => null}>People</Button>
            </div>
      </div>
      <Announcement />
      <Divider orientation='horizontal' style={{width: '500px', paddingTop: '20px'}} />
      <Meetings />
      <Divider orientation='horizontal' style={{width: '500px', paddingTop: '20px'}} />
      <Members />
      <Divider orientation='horizontal' style={{width: '500px', paddingTop: '20px'}} />
    </div>
  );
}

export default Dashboard;