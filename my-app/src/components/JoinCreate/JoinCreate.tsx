import React from 'react';
import './JoinCreate.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"


interface LogInProps {
  handleGoToWelcomePage: () => void;
  handleGoToDashboardPage: () => void;
}

const JoinCreate: React.FC<LogInProps> = ({ handleGoToWelcomePage, handleGoToDashboardPage }) => {
  return (
    <div className="logBox">
        <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Do you want to create a new group, or join an existing group?</Text>
        </CardBody>
        <CardFooter className="footer">
          <Button colorScheme='blue' onClick={handleGoToDashboardPage}>Continue to App</Button>
          <Button colorScheme='blue' onClick={handleGoToWelcomePage}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default JoinCreate;
