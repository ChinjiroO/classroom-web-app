import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ReactTinyLink } from "react-tiny-link";
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
  MiconButton,
  BnavLink,
  Mbutton
} from "./Styled";
//*Matrial UI
import { Menu, MenuItem, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MoreVert from "@mui/icons-material/MoreVert";

function Feed() {
  let { id } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [classroom, setClassroom] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState([]);
  const [ID] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
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
        {/* {ID === "" ? (
          <div>Loading ...</div>
        ) : ( */}
        <Tab.Container fluid defaultActiveKey={ID}>
          <Srow>
            <Col md={3}>
              {user.result.googleId === classroom.leader ? (
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
                  <CreateTopic show={modal} onHide={() => setModal(false)} />
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
                              <Row>
                                <Col>
                                  <MiconButton>
                                    <LibraryBooksIcon
                                      style={{ color: "white" }}
                                    />
                                  </MiconButton>
                                  {item.Ititle === "" ? "" : item.Ititle}
                                </Col>
                                <Col xs="auto">
                                  <IconButton>
                                    <MoreVert />
                                  </IconButton>
                                </Col>
                              </Row>
                            </IcardTitle>
                            <hr />
                            <IcardDescription>
                              {item.description === "" ? "" : item.description}
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