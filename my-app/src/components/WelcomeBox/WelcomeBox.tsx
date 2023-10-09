import React from 'react';
import './WelcomeBox.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"

interface WelcomeBoxProps {
  handleGoToLogInPage: () => void;
  handleGoToSignUpPage: () => void;
}

const WelcomeBox: React.FC<WelcomeBoxProps> = ({ handleGoToLogInPage, handleGoToSignUpPage }) => {
  return (
    <div className="mainBox">
      <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Welcome to our Bible study app! Sign up or Log in below to get started.</Text>
        </CardBody>
        <CardFooter className="footer">
          <Button colorScheme='blue' onClick={handleGoToLogInPage}>Log In</Button>
          <Button colorScheme='blue' onClick={handleGoToSignUpPage}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default WelcomeBox;