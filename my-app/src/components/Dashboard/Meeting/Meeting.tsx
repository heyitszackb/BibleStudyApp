import React from 'react';
import './Meeting.css';

import { Avatar, AvatarBadge, Button, Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text } from "@chakra-ui/react"


interface MeetingProps {
}

const Meeting: React.FC<MeetingProps> = () => {
  return (
    <div>
        <Card style={{width: '300px', height: '200px'}}>
          <CardBody>
            <Text>Meeting Name</Text>

            <Stack direction='row' spacing={4} style={{paddingTop: '20px'}}>
              <Avatar>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
              <Avatar>
                <AvatarBadge bg='red.500' boxSize='1.25em' />
              </Avatar>
            </Stack>
          </CardBody>
          <CardFooter style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="solid">Attending</Button>
            <Button variant="outline">Not Going</Button>
          </CardFooter>
        </Card>
    </div>
  );
}

export default Meeting;
