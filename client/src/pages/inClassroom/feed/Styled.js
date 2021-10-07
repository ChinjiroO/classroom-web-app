import { Card, Container, DropdownButton, Nav, NavItem, NavLink, Col, Row, Tab } from "react-bootstrap";
import styled from "styled-components";

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
export const HcardSub = styled(Card.Subtitle)`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  `
export const HcardTitle = styled(Card.Title)`
  font-weight: 700;
  color: #ffffff;
  font-size: 2.5rem;
  font-family: 'Noto Sans Thai', sans-serif;
`
export const Sdiv = styled.div`
  background-color: #f6f6f6;
`
export const Bcard = styled(Card)`
  background-color: #fff;
  padding: 1.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  `
export const BcardContent = styled(Card)`
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
`
export const SnavItem = styled(NavItem)`

`
export const SnavLink = styled(NavLink)`

`
export const SdropdownBtn = styled(DropdownButton)`

`
export const Btab = styled(Tab)``;
export const Bnav = styled(Nav)``;
export const Icard = styled(Card)`
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;
export const IcardTitle = styled(Card.Title)`
  color: #0d2862;
  font-size: medium;
  margin: 0 0 0;
  &.div {
    display: flex;
    justify-content: space-between;
  }
`;
export const IcardDescription = styled(Card.Text)`
  font-size: small;
  white-space: pre-line;
  font-size: medium;
`;
export const ItemsContainer = styled(Container)`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
`;
export const Srow = styled(Row)`
  row-gap: 1rem;
`;
export const Icol = styled(Col)`
  padding: 0;
  margin-bottom: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;