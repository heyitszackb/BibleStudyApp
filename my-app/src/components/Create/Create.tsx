import React from 'react';
import './Create.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"


interface CreateProps {
  handleGoToDashboardPage: () => void;
  handleGoToJoinCreate: () => void;
}

const Create: React.FC<CreateProps> = ({ handleGoToDashboardPage, handleGoToJoinCreate }) => {
  return (
    <div className="logBox">
        <Card align='center' className="card">
        <CardHeader>
          <Heading size='md'>Bibly Study App</Heading>
        </CardHeader>
        <CardBody>
          <Text>Let's create a new group!</Text>
          (New group creation form)
        </CardBody>
        <CardFooter className="footer">
        <Button colorScheme='blue' onClick={handleGoToDashboardPage}>Create New Group</Button>
          <Button colorScheme='blue' onClick={handleGoToJoinCreate}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Create;
