import axios from "axios";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
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

  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

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

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Logout</Tooltip>}
            >
              <Sbutton onClick={logout}>
                <Simage fluid roundedCircle src={user?.result.imageUrl} />
              </Sbutton>
            </OverlayTrigger>
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
