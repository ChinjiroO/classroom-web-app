import styled from "styled-components";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = ({ className, children }) => (
  <nav className={className}>{children}</nav>
);
const A = ({ className, children, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);
const Div = ({ className, children }) => (
  <div className={className}>{children}</div>
);
export const Slink = styled(Link)`
  text-decoration: none;
  color: #0d2862;
`;
export const Sitem = styled.div`
  margin: 0.75em 0 0 0;
`;
export const Simage = styled(Image)`
  width: 2rem;
  height: 2rem;
  /* margin-left: 0.5rem; */
`;
export const Sbutton = styled(Button)`
  background-color: #f8fafd;
  border: none;
  width: 3rem;
  height: 3rem;
  color: #5b6d94;
  padding: 0.375rem 0.375rem;
  border-radius: 5rem;
  &:hover {
    color: #0d2862;
    background-color: #efefef;
    border: none;
  }
  &.logout {
    border-radius: 0;
    width: auto;
    height: auto;
    background-color: transparent;
    border: none;
    &:hover {
      border: none;
    }
    &:active {
      border: none;
    }
  }
`;
export const Snav = styled(Nav)`
  &.navbar {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  &.sticky-nav {
    position: sticky;
    top: 0;
  }
`;
export const Sa = styled(A)`
  &.navbar-brand {
    color: #0d2862;
    background-color: #ffffff;
    &:hover {
      color: #0d2862;
    }
  }
`;
export const Sdiv = styled(Div)`
  background-color: #ffffff;
  &.container-fluid {
    background-color: #ffffff;
  }
`;
