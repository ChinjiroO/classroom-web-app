import styled from "styled-components";
import {
  Container,
  Form,
  Button,
  FormControl,
  Image,
  FormLabel,
} from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

//position: absolute;
//*horizontal align
//justify-content: center;
//*vertical align
//align-items: center;

export const Scontainer = styled(Container)`
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Sform = styled(Form)`
  background-color: white;
  border-radius: 1.25em;
  padding: 4rem;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;
export const Sbutton = styled(Button)`
  background-color: #f8fafd;
  border: none;
  min-width: 15rem;
  color: #5b6d94;
  border-radius: 0.5rem;
  &:hover {
    color: #0d2862;
    background-color: #efefef;
    border: none;
  }
`;
export const Simg = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;
export const GoogleIcon = styled(FcGoogle)`
  background-color: transparent;
`;
export const SformControl = styled(FormControl)`
  width: 20rem;
`;
export const StextHeader = styled.h1`
  color: #0d2862;
`;
export const SformLabel = styled(FormLabel)`
  color: #0d2862;
  margin-right: 8px;
`;
export const ScontainerLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 0 0;
`;
export const Slink = styled(Link)`
  text-decoration: none;
  color: #0d2862;
  &:hover {
    color: #0d2862;
    opacity: 0.8;
  }
`;
