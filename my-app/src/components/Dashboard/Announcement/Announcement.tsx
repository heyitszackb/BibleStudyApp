import React from 'react';
import './Announcement.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react"


interface AnnouncementProps {
}

const Announcement: React.FC<AnnouncementProps> = () => {
  return (
    <div style={{paddingTop: '20px', width: '500px'}}>
        <Card>
          <CardBody>
            <Text>Hey guys! Just wanted to encourage you with James 4:17 "If anyone, then, knows the good they ought to do and doesn't do it, it is sin for them." </Text>
          </CardBody>
        </Card>
    </div>
  );
}

export default Announcement;
