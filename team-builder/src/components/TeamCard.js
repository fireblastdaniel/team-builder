import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const TeamCard = props => {
    const name = `${props.info.fname} ${props.info.lname}`;
    return (
            <Card>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{props.info.role}</CardSubtitle>
                    <CardSubtitle>{props.info.email}</CardSubtitle>
                    <Button>Edit</Button>
                </CardBody>
            </Card>
      );
}

export default TeamCard;