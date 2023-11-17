import React from 'react';
import './Members.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, Avatar } from "@chakra-ui/react"
import { people } from '../../../dummy-db';
import { Person } from '../../../types';

interface MembersProps {
  members: {
    person: Person;
    bio: string;
  }[];
  
}

const Members: React.FC<MembersProps> = ({ members }: MembersProps) => {
  
  return (
    <div className="" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',

    }}>
      {members.map((member, index) => (
        <Card key={index} style={{ width: '300px', height: '260px' }}>
          <CardHeader>
            <Text fontSize={22}>{member.person.name}</Text>
            <Text fontSize={12}>{member.person.prayerRequest}</Text>
          </CardHeader>
          <CardBody style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar name={member.person.name} src={member.person.image}></Avatar>
          </CardBody>
          {/* You can add more content or remove CardFooter if not needed */}
        </Card>
      ))}
    </div>
  );
}

const sampleMembers = people.map(person => ({
  person,
  bio: "Lorem ipsum dolor sit amet...", // You can replace this with actual bio data
}));

const SampleMembersComponent: React.FC = () => (
  <Members members={sampleMembers} />
);

export default SampleMembersComponent;