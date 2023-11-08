import React from 'react';
import './Meeting.css';

import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"


interface MeetingProps {
}

const Meeting: React.FC<MeetingProps> = () => {
  return (
    <div>
        <Card style={{width: '200px', height: '200px'}}>
          <CardBody>
            <Text>Sample meeting</Text>
          </CardBody>
        </Card>
    </div>
  );
}

export default Meeting;
