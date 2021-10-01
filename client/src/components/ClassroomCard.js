import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from '../assets/bg1.jpg';

const ClassroomCard = (props) => {
  const { nameOfClass, _id, subject } = props;

  return (
    <Slink to={`/h/${_id}/feed`}>
      <Scard>
        <Card.Body>
          <ScardTitle>{nameOfClass}</ScardTitle>
          <Card.Text>{subject}</Card.Text>
          <br/>
          <br/>
        </Card.Body>
      </Scard>
    </Slink>
  );
};

export default ClassroomCard;

export const Scard = styled(Card)`
  min-width: 21.875rem;
  max-width: 28rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  will-change: transform;
  transition: transform 450ms;
  &:hover {
    background-color: rgba(220, 234, 253);
    transition: transform 125ms;
    transform: translateY(-10px);
		border: none;
  }
  `;
export const Sbutton = styled(Button)``;
export const Slink = styled(Link)`
  text-decoration: none;
  color: rgba(13, 40, 98);
  &:hover {
    color: rgba(0, 102, 221);
  }
`;
export const ScardTitle = styled(Card.Title)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 80%;
`
