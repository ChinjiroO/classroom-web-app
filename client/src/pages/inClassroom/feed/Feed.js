import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ReactTinyLink } from "react-tiny-link";
import styled from "styled-components";
import { HCardFeed } from "../../../components/HCardFeed";
import Navbar from "../../../components/Navbar";
import CreateTopic from "../../../components/CreateTopic";
import CreateItem from "../../../components/CreateItem";
import {
  Bcard,
  BcardContent,
  Bnav,
  Icard,
  IcardDescription,
  IcardTitle,
  Icol,
  ItemsContainer,
  Scontainer,
  Sdiv,
  Srow,
} from "./Styled";
//*Matrial UI
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Feed() {
  let { id } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [classroom, setClassroom] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState([]);
  const [ID, setID] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modal, setModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTopic = async () => {
    await setAnchorEl(null);
    setModal(true);
  };
  const handleItem = async () => {
    await setAnchorEl(null);
    setItemModal(true);
  };

  useEffect(() => {
    const getClassroomData = async () => {
      setIsLoading(true);
      const res = await axios
        .get("https://goroom.herokuapp.com/classroom/id/" + id)
        .catch((error) => console.log(error));
      console.log(id);
      setClassroom(res.data);
      setIsLoading(false);
    };
    getClassroomData();
  }, []);

  //* -----------Fetch Topics by current classroom_id -----------
  useEffect(() => {
    const getTopic = async () => {
      const res = await axios
        .get("https://goroom.herokuapp.com/topics/" + id)
        .catch((err) => console.log(err));
      // setID(res.data[0]._id.toString());
      setTopics(res.data);
      return res;
    };
    getTopic();
  }, []);

  return (
    <Sdiv>
      <Navbar />
      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
      <Scontainer fluid>
        {/* //!Header */}
        {HCardFeed(isLoading, classroom)}
        {/* //!Body */}
        {/* {ID === "" ? (
          <div>Loading ...</div>
        ) : ( */}
        <Tab.Container fluid defaultActiveKey={ID}>
          <Srow>
            <Col md={3}>
              {user.result.googleId == classroom.leader ? (
                <div>
                  <Mbutton
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <AddIcon />
                    Create
                  </Mbutton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleTopic}>
                      <FormatListBulletedIcon style={{ marginRight: "10px" }} />
                      TOPIC
                    </MenuItem>
                    <MenuItem onClick={handleItem}>
                      <LibraryBooksIcon style={{ marginRight: "10px" }} />
                      ITEM
                    </MenuItem>
                  </Menu>
                  <CreateTopic 
                    show={modal} 
                    onHide={() => setModal(false)} 
                  />
                  <CreateItem
                    show={itemModal}
                    onHide={() => setItemModal(false)}
                  />
                </div>
              ) : (
                <></>
              )}
              <Bcard>
                <Card.Title>Lesson Topic</Card.Title>
                <Bnav variant="pills" className="flex-column">
                  {topics.map((topic) => (
                    <Nav.Item>
                      <BnavLink eventKey={topic._id}>{topic.title}</BnavLink>
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
                              {item.Ititle == "" ? "" : item.Ititle}
                            </IcardTitle>
                            <hr />
                            <IcardDescription>
                              {item.description == "" ? "" : item.description}
                            </IcardDescription>
                            {item.attachments === "" ? (
                              <></>
                            ) : (
                              <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url={item?.attachments}
                              ></ReactTinyLink>
                            )}
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
        {/* )} */}
      </Scontainer>
    </Sdiv>
  );
}

export default Feed;

export const Mbutton = styled(Button)`
  && {
    margin-bottom: 1rem;
    background-color: rgba(0, 102, 221);
    color: #ffffff;
    border-radius: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    &:hover {
      color: #f8fafd;
      background-color: rgba(92, 157, 233);
    }
  }
`;
export const BnavLink = styled(Nav.Link)`
  color: #0d2862;
  &:hover {
    color: #5b6d94;
  }
`;
