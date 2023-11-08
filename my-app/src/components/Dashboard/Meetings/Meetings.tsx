import React from 'react';
import './Meetings.css';
import Meeting from '../Meeting/Meeting';

import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"



interface MeetingsProps {
}

const Meetings: React.FC<MeetingsProps> = () => {
  return (
    <div className="">
        <Meeting />
    </div>
  );
}

export default Meetings;
