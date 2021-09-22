import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const ClassroomCard = (props) => {
	const { nameOfClass, _id, subject} = props
	
  return (
    <Scard>
      <Card.Body>
				<Card.Title>{nameOfClass}</Card.Title>
				<Card.Text>{subject}</Card.Text>
				<Sbutton to={_id}>Enter</Sbutton>
			</Card.Body>
    </Scard>
  );
};

export default ClassroomCard;

export const Scard = styled(Card)`
	min-width: 21.875rem;
	max-width: 28rem;	
	box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;	
`
export const Sbutton = styled(Button)`	

`
