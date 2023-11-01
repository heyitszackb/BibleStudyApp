import React from 'react';
import './LogIn.css';
import { Input, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"


interface LogInProps {
  handleGoToWelcomePage: () => void;
  handleGoToDashboardPage: () => void;
}

const LogIn: React.FC<LogInProps> = ({ handleGoToWelcomePage, handleGoToDashboardPage }) => {
  return (
    <div className="logBox">
        <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Log In Below!</Text>
          <br />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </CardBody>
        <CardFooter className="footer">
          <Button colorScheme='blue' onClick={handleGoToDashboardPage}>Continue to App</Button>
          <Button colorScheme='blue' onClick={handleGoToWelcomePage}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LogIn;
