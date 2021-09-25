import React, { useState, useEffect } from "react";
import { ReactTinyLink } from "react-tiny-link";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import { HCardFeed } from "../../../components/HCardFeed";
import {
  Sdiv,
  Scontainer,
  Bcard,
  SnavItem,
  SnavLink,
  BcardContent,
} from "./Styled";
import styled from "styled-components";
import { FaBook } from "react-icons/fa";

function Feed() {
  let { id } = useParams();
  const [classroom, setClassroom] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios
        .get("http://localhost:9000/classroom/id/" + id)
        .catch((error) => console.log(error));
      setClassroom(res.data);
      // console.log(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Sdiv>
      <Navbar />
      <Scontainer fluid>
        {/* //!Header */}
        {HCardFeed(isLoading, classroom)}
        {/* //!Body */}
        <Tab.Container fluid defaultActiveKey="first">
          <Srow>
            {/* //! Topic of lesson Tabs */}
            <Col md={3}>
              <Bcard>
                <Card.Title>Lesson Tabs</Card.Title>
                <Bnav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Bnav>
              </Bcard>
            </Col>
            {/* //! Show item in Topic, When Tabs selected */}
            <Col md={9}>
              <BcardContent>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {/* //! item card */}
                    <ItemsContainer fluid>
                      <Icard>
                        <IcardTitle>
                          <FaBook color="#000" size="2rem" />
                          Title
                        </IcardTitle>
                        <hr />
                        <IcardDescription>
                          Magna ad qui cupidatat proident ea nostrud irure.
                        </IcardDescription>
                      </Icard>
                    </ItemsContainer>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <span>
                      Adipisicing sunt minim non labore nisi adipisicing elit
                    </span>
                    <ReactTinyLink 
                      cardSize="small"
                      showGraphic={true}
                      maxLine={2}
                      minLine={1}
                      url="https://www.youtube.com/watch?v=yeLzT0M21Kk"
                    />                    
                  </Tab.Pane>
                </Tab.Content>
              </BcardContent>
            </Col>
          </Srow>
        </Tab.Container>
      </Scontainer>
    </Sdiv>
  );
}

export default Feed;

export const Btab = styled(Tab)``;
export const Bnav = styled(Nav)``;
export const Icard = styled(Card)`
  background-color: rgb(13, 40, 98, 0.15);
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
`;
export const IcardTitle = styled(Card.Title)`
  color: #0d2862;
  font-size: medium;
`;
export const IcardDescription = styled(Card.Text)`
  font-size: small;
  color: #5b6d94;
`;
export const ItemsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
`;
export const Srow = styled(Row)`
  row-gap: 1rem;
`;
