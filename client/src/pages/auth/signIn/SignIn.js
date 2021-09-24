import React from "react";
import { Col, Row } from "react-bootstrap";
import bg1 from "../../../assets/bg1.jpg";
import { LoginForm } from './LoginForm';
import { Scontainer, Simg } from "./Styled";

function SignIn() {
  return (
    <Scontainer fluid>
      <Simg src={bg1} />
      <Row className="justify-content-center">
        <Col md="auto" sm="auto" xs="auto">
          {/* Variable width content <FcGoogle /> */}
          <LoginForm />
        </Col>
      </Row>
    </Scontainer>
  );
}

export default SignIn;


