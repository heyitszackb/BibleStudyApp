import React from 'react';
import './Meeting.css';

// Types
import { Person, Meeting } from '../../../types';

import { Avatar, AvatarBadge, AvatarGroup, Button, Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text } from "@chakra-ui/react"


interface MeetingProps {
  name: string;
  date: Date;
  time: string;
  attendees: {
    person: Person;
    isAttending: boolean;
  }[];
}

const MeetingComponent: React.FC<MeetingProps> = ({ name, date, time, attendees }: MeetingProps) => {
  const avatars = attendees.map((attendee) => (
    <Avatar name={attendee.person.name} src={attendee.person.name}>
      <AvatarBadge bg={attendee.isAttending ? 'green.500' : 'red.500'} boxSize='1.25em' />
    </Avatar>
  ));

  return (
    <div>
        <Card style={{width: '300px', height: '260px'}}>
          <CardHeader>
            <Text fontSize={22}>{name}</Text>
            <Text>{date.toDateString()} @ {time}</Text>
          </CardHeader>
          <CardBody style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

            <AvatarGroup size='md' max={3}>
              {avatars}
            </AvatarGroup>
          </CardBody>
          <CardFooter style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="solid" bg="green.500" style={{color: 'white'}}>Attending</Button>
            <Button variant="ghost" color="red.500">Not Going</Button>
          </CardFooter>
        </Card>
    </div>
  );
}

export default MeetingComponent;
