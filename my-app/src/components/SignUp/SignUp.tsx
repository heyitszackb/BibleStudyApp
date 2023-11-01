import React from 'react';

// Styles
import './SignUp.css';

// Components
import { Input, Textarea, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"


interface SignUpProps {
  handleGoToWelcomePage: () => void;
  handleGoToJoinCreate: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ handleGoToWelcomePage, handleGoToJoinCreate }) => {
  return (
    <div className="signBox">
        <Card align='center' className="card">
        <CardHeader className="header">
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Sign up below to create an account</Text>
          (Create account form here)
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Input placeholder="Phone Number" />
          <Textarea placeholder="Any prayer requests?" />
        </CardBody>
        <CardFooter className="footer">
          <Button colorScheme='blue' onClick={handleGoToJoinCreate}>Create Account</Button>
          <Button colorScheme='blue' onClick={handleGoToWelcomePage}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
