import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const ClassroomCard = (props) => {
  const localGid = JSON.parse(localStorage.getItem("profile")).result.googleId;
  const { nameOfClass, _id, subject, leader, room } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const reloads = () => {
    setTimeout(() => window.location.reload(), 500);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //! Delete classrooms & topics
  const handleDel = (e) => {
    // let Accepts;
    // if(Accepts == true)
    axios
      .delete("https://goroom.herokuapp.com/classroom/del/" + _id)
      .then((res) => console.log(res.status))
      .catch((err) => console.err(err));
    axios.delete("https://goroom.herokuapp.com/topics/del/cid/" + _id);
    reloads();
  };
  // console.log(localGid);
  console.log(_id);
  console.log(leader);
  return (
    <Mcard sx={{ maxWidth: 345 }}>
      <Row>
        <Col>
          <Slink to={`/h/${_id}/feed`}>
            <CardContent>
              <Mtypography>{nameOfClass}</Mtypography>
              <Mstypography>{subject}</Mstypography>
              <Mstypography>{room}</Mstypography>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </CardContent>
          </Slink>
        </Col>
        <Col xs="auto">
          <CardHeader
            action={
              <>
                <MiconButton
                  tabIndex={2}
                  aria-label="settings"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </MiconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {leader === localGid ? (
                    <MenuItem onClick={handleDel}>Delete</MenuItem>
                  ) : (
                    <MenuItem>Leave</MenuItem>
                  )}
                </Menu>
              </>
            }
          />
        </Col>
      </Row>
    </Mcard>
  );
};

export default ClassroomCard;

export const Mcard = styled(Card)`
  && {
    min-width: 21.875rem;
    max-width: 28rem;
    border-radius: 0.5rem;
    border-color: #000;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    will-change: transform;
    transition: transform 450ms;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      transition: transform 125ms;
      transform: translateY(-10px);
      border: none;
    }
  }
`;
export const Sbutton = styled(Button)``;
export const Slink = styled(Link)`
  text-decoration: none;
  color: rgba(13, 40, 98);
  &:hover {
    color: rgba(0, 102, 221);
  }
`;
export const MiconButton = styled(IconButton)`
  && {
  }
`;
export const Mtypography = styled(Typography)`
  && {
    max-width: 14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: larger;
    font-weight: bold;
    font-family: "Noto Sans Thai", sans-serif;
    color: black;
    /* width: 80%; */
  }
`;
export const Mstypography = styled(Typography)`
  && {
    max-width: 14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: larger;
    font-family: "Noto Sans Thai", sans-serif;
    color: black;
    &:hover {
      color: black;
    }
    /* width: 80%; */
  }
`;
export const McardHeader = styled(CardHeader)`
  && {
  }
`;
// export const ScardHeader = styled(CardHeader)`
//   background-color: white;
//   border: none;
//   padding-bottom: 0;
// `;
// export const ScardBody = styled(Card.Body)`
//   padding-top: 0;
// `;
