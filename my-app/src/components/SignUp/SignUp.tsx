import React from 'react';
import './SignUp.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"

function SignUp() {
  return (
    <div className="signBox">
      <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Sign Up Below!</Text>
        </CardBody>
        <CardFooter className="footer">
          
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
