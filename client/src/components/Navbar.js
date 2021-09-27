import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";
import { Snav, Sdiv, Sa, Sbutton, Slink, Sitem, Simage } from "./Styled";
import { Container, DropdownButton, Nav, NavDropdown } from "react-bootstrap";
import * as actionType from "../constant/actionTypes";
import CreateModal from "./CreateModal";
import decode from 'jwt-decode'
import axios from "axios";
import { OffCanvas } from "./OffCanvas";
import styled from "styled-components";
import logo from "../assets/logo-icon.png"

export const MenuItems = (props) => {
  const { title, _id } = props;
  return (
    <Container>
      <Slink to={`/h/${_id}/feed`} >
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
      type: actionType.LOGOUT
    });
    history.push("/sign_in");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) 
        logout();
    }
  }, [location]);

  //*get data from collection "classrooms"
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const res = await axios
				.get("http://localhost:9000/classroom/"+ user.result.googleId)
				.catch((error) => console.log(error));		

			setClassrooms(res.data);
			setIsLoading(false);
		}
		fetchData();
	}, []);

  return (
    <div>
      <Snav className="navbar navbar-light">
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
            <Sbutton className="logout" onClick={logout}>
              Logout
            </Sbutton>
            {/* //!dropdown */}
            {/* <NavDropdown id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

						<Sbutton onClick={() => setModal(true)}>
							<GrAdd style={darkIcon}/>
						</Sbutton>
						<CreateModal 
							show={modal}
							onHide={() => setModal(false)}
						/>
            <Sbutton onClick={handleActive}>
              <HiMenu style={darkIcon} />
            </Sbutton>
            <Sbutton>
              <Simage fluid roundedCircle src={user?.result.imageUrl} alt={user?.result.name}/>            
            </Sbutton>
          </SiNav>

          {/*//! OffCanvas */}
          {OffCanvas(active, handleInactive, isLoading, classrooms)}
        </Sdiv>
      </Snav>
    </div>
  );
};

export default Navbar;

export const SdropdownBtn = styled(DropdownButton)`
  &.dropdown-toggle::after {
    display: none !important;
    content: none !important;
  }
`
export const SiNav = styled(Nav)`
  gap: 0.75rem;
`
