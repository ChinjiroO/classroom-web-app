import styled from "styled-components";
import { Container, Card, Nav, NavItem, NavLink, DropdownButton } from "react-bootstrap";

export const Scontainer = styled(Container)`
  margin: 0 auto;
  background-color: #f6f6f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  width: calc(100% - 2 * 1.5rem);
  max-width: 62.5rem;
  padding: 0;
  `
export const Hcard = styled(Card)`
  background-color: #0066dd;
  border: none;
  border-radius: 1rem;
  width: 100%;
  min-width: 22.53rem;
  height: 15rem;
  padding: 1.5rem;
  margin: 1.5rem 0rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`
export const HcardTitle = styled(Card.Title)`
  color: #ffffff;
  font-size: 1.75rem;
`
export const Sdiv = styled.div`
  background-color: #f6f6f6;
`
export const Bcard = styled(Card)`
  background-color: #fff;
  padding: 1.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    `
export const BcardContent = styled(Card)`
  background-color: rgba(255, 255, 255, 0.25);  
  padding: 1.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
export const SnavItem = styled(NavItem)`

`
export const SnavLink = styled(NavLink)`

`
export const SdropdownBtn = styled(DropdownButton)`

`