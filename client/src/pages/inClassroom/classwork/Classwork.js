import React from "react";
import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import { Container } from "react-bootstrap";

const Classwork = (props) => {
  return (
    <div>
      <Navbar />
      <Scontainer fluid>Classwork</Scontainer>
    </div>
  );
};

export default Classwork;

export const Scontainer = styled(Container)`
`
