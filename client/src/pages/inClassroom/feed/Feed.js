import React, { useState, useEffect } from "react";
import { ReactTinyLink, useScrapper } from "react-tiny-link";
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
  Srow,
  Bnav,
  Icol,
  ItemsContainer,
  Icard,
  IcardTitle,
  IcardDescription,
} from "./Styled";
import { FaBook } from "react-icons/fa";
import { ObjectId } from 'bson';

function Feed() {
  let { id } = useParams();
  let urls =
    "https://drive.google.com/file/d/1ClwyLgfodjvu0vOlVYPbq3SOtirDl0Gn/view?usp=sharing";

  const [classroom, setClassroom] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios
        .get("http://localhost:9000/classroom/id/" + id)
        .catch((error) => console.log(error));
      setClassroom(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  //* -----------Fetch Topics by current classroom_id -----------
  useEffect(() => {
    const getTopic = async () => {
      const res = await axios
        .get("http://localhost:9000/topics/" + id)
        .catch((err) => console.log(err));
      setTopics(res.data);
      return res;
    };
    getTopic();
  }, []);

  return (
    <Sdiv>
      <Navbar />
      <Scontainer fluid>
        {/* //!Header */}
        {HCardFeed(isLoading, classroom)}
        {/* //!Body */}
        <Tab.Container fluid >
          <Srow>
            <Col md={3}>
              <Bcard>
                <Card.Title>Lesson Tabs</Card.Title>
                <Bnav variant="pills" className="flex-column">
                  {topics.map((topic) => (
                    <Nav.Item>
                      <Nav.Link eventKey={topic._id}>
                        {topic.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Bnav>
              </Bcard>
            </Col>

            <Icol md={9}>
              <BcardContent>
                <Tab.Content>
                  {topics.map((topic) => (
                    <Tab.Pane eventKey={topic._id}>
                      <ItemsContainer fluid>
                        {topic.items.map((item) => (
                          <Icard>
                            <IcardTitle>
                              <FaBook color="#000" size="2rem" />
                              {item.title}
                            </IcardTitle>
                            <hr />
                            <IcardDescription></IcardDescription>
                              <ReactTinyLink 
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url={item.attachments}
                              ></ReactTinyLink>
                          </Icard>
                        ))}
                      </ItemsContainer>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </BcardContent>
            </Icol>
          </Srow>
        </Tab.Container>
      </Scontainer>
    </Sdiv>
  );
}

export default Feed;
