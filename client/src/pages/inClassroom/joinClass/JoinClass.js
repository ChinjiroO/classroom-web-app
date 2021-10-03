import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Container, Col, Row, Button } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../../../components/Navbar'
import { useParams, useHistory } from 'react-router-dom'

const JoinClass = () => {
  let { id } = useParams();
  const user = JSON.parse(localStorage.getItem("profile"))
  const googleIdOfuser = user.result.googleId;
  const classroom = ({ members: [googleIdOfuser]});
  const history = useHistory();
  
  console.log(classroom.members);

  //* Update member in Classroom
  const joinClass = (e) => {
    axios
      .post("http://localhost:5000/classroom/update/" + id, classroom)
      .catch((err) => console.log(err));
    history.push('/h/:{id}/feed');
  }
  
  return (
    <>
      <Navbar/>
      <Card>
        <Card.Header>
          <Card.Title>{googleIdOfuser}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button onClick={joinClass}>Join Classroom</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default JoinClass
