import React from 'react';
import './LogIn.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"

function LogIn() {
  return (
    <div className="logBox">
        <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Log In Below!</Text>
        </CardBody>
        <CardFooter className="footer">
          
        </CardFooter>
      </Card>
    </div>
  );
}

export default LogIn;
