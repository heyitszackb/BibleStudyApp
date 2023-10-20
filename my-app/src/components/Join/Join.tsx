import React from 'react';
import './Join.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"


interface JoinProps {
  handleGoToDashboardPage: () => void;
  handleGoToJoinCreate: () => void;
}

const Join: React.FC<JoinProps> = ({ handleGoToDashboardPage, handleGoToJoinCreate }) => {
  return (
    <div className="logBox">
        <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Let's join a group!</Text>
          (List of existing groups)
        </CardBody>
        <CardFooter className="footer">
          <Button colorScheme='blue' onClick={handleGoToDashboardPage}>Join Group</Button>
          <Button colorScheme='blue' onClick={handleGoToJoinCreate}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Join;
