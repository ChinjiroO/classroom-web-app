import axios from "axios";
import decode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  DropdownButton,
  Nav,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { GrAdd } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo-icon.png";
import * as actionType from "../constant/actionTypes";
import CreateModal from "./CreateModal";
import { OffCanvas } from "./OffCanvas";
import { Sa, Sbutton, Sdiv, Simage, Sitem, Slink, Snav } from "./Styled";

export const MenuItems = (props) => {
  const { title, _id } = props;
  const reloads = () => {
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <Container>
      <Slink to={`/h/${_id}/feed`} onClick={reloads}>
        <Sitem>
          <span>{title}</span>
        </Sitem>
      </Slink>
    </Container>
  );
};
const darkIcon = { fontSize: "1.5rem", backgroundColor: "transparent" };

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [modal, setModal] = useState(false);
  const [classrooms, setClassrooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const handleActive = () => setActive(true);
  const handleInactive = () => setActive(false);

  const logout = () => {
    dispatch({
      type: actionType.LOGOUT,
    });
    history.push("/sign_in");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  //*get data from collection "classrooms"
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios
        .get("https://goroom.herokuapp.com/classroom/" + user.result.googleId)
        .catch((error) => console.log(error));

      setClassrooms(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  //* Menu Material UI
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Snav className="navbar navbar-light sticky-top">
        <Sdiv className="container-fluid">
          {/*//! Brand name */}
          <Sa className="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            GoRoom
          </Sa>
          {/*//! Nav Items */}
          <SiNav>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Create a Classroom</Tooltip>}
            >
              <Sbutton onClick={() => setModal(true)}>
                <GrAdd style={darkIcon} />
              </Sbutton>
            </OverlayTrigger>

            <CreateModal show={modal} onHide={() => setModal(false)} />
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Show menu</Tooltip>}
            >
              <Sbutton onClick={handleActive}>
                <HiMenu style={darkIcon} />
              </Sbutton>
            </OverlayTrigger>

            <Sbutton onClick={logout}>
              <Simage
                fluid
                roundedCircle
                src={user?.result.imageUrl}
                alt={user?.result.name}
              />
            </Sbutton>
          </SiNav>

          {/*//! OffCanvas */}
          {OffCanvas(active, handleInactive, isLoading, classrooms)}
        </Sdiv>
      </Snav>
    </>
  );
};

export default Navbar;

export const SdropdownBtn = styled(DropdownButton)`
  &.dropdown-toggle::after {
    display: none !important;
    content: none !important;
  }
`;
export const SiNav = styled(Nav)`
  gap: 0.75rem;
`;
