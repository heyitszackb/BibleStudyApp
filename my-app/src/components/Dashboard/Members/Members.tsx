import React, { useState, useEffect } from 'react';
import './Members.css';
import axios from 'axios';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, Avatar } from "@chakra-ui/react"
import { people } from '../../../dummy-db';
import { Person } from '../../../types';

// interface MembersProps {
//   members: {
//     person: Person;
//     bio: string;
//   }[];
// }

const Members = () => {
  const [members, setMembers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users'); // Update the URL accordingly
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  
  return (
    <div className="" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',

    }}>
      {members && (members as any[]).map((member: any, index: any) => (
        <Card key={index} style={{ width: '300px', height: '260px' }}>
          <CardHeader>
            <Text fontSize={22}>{member.name}</Text>
            <Text fontSize={12}>{member.prayerRequest}</Text>
          </CardHeader>
          <CardBody style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar name={member.name} src={member.image}></Avatar>
          </CardBody>
          {/* You can add more content or remove CardFooter if not needed */}
        </Card>
      ))}
    </div>
  );
}

export default Members;