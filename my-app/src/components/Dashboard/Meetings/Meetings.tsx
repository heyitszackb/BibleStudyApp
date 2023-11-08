import React from 'react';
import './Meetings.css';
import MeetingComponent from '../Meeting/Meeting';
import { meetings } from '../../../dummy-db'

import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"



interface MeetingsProps {
}

const Meetings: React.FC<MeetingsProps> = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',

    }} >
      {meetings.map((meeting, index) => (
        <MeetingComponent key={index} {...meeting} />
      ))}
    </div>
  );
}

export default Meetings;