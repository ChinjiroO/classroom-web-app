import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { MdAssignment, MdPeople } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";
import { Snav, Sdiv, Sa, Sbutton, Slink, Sitem } from "./Styled";
import { Offcanvas, Container } from "react-bootstrap";
import * as actionType from "../constant/actionTypes";
import CreateModal from "./CreateModal";

//* menu items
export const Items = [
  {
    title: "Feed",
    to: "/dashboard/",
    icon: <CgFeed size="2em" />,
  },
  {
    title: "Classwork",
    to: "/dashboard/classwork",
    icon: <MdAssignment size="2em" />,
  },
  {
    title: "Member",
    to: "/dashboard/member",
    icon: <MdPeople size="2em" />,
  },
];
export const MenuItems = (props) => {
  const { title, to, icon } = props;
  return (
    <Container>
      <Slink exact to={to} on>
        <Sitem>
          <i>{icon}</i>
          <span>{title}</span>
        </Sitem>
      </Slink>
    </Container>
  );
};
const darkIcon = { fontSize: "1.5rem", backgroundColor: "transparent" };

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const [modal, setModal] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleActive = () => setActive(true);
  const handleInactive = () => setActive(false);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/sign_in");
    setUser(null);
  };

  return (
    <div>
      <Snav className="navbar navbar-light">
        <Sdiv className="container-fluid">
          {/*//! Brand name */}
          <Sa className="navbar-brand" href="/">
            <img
              src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              style={{ marginRight: "10px" }}
            />
            GoRoom
          </Sa>
          {/*//! User Profile */}
          {/* <div>

          </div> */}
          {/*//! Toggler */}
          <div>
						<Sbutton onClick={() => setModal(true)}>
							<GrAdd style={darkIcon}/>
						</Sbutton>
						<CreateModal 
							show={modal}
							onHide={() => setModal(false)}
						/>
            <Sbutton className="logout" onClick={logout}>
              Logout
            </Sbutton>
            <Sbutton onClick={handleActive}>
              <HiMenu style={darkIcon} />
            </Sbutton>
          </div>

          {/*//! OffCanvas */}
          <Offcanvas show={active} onHide={handleInactive}>
            <Offcanvas.Header closeButton style={{ paddingBottom: "0" }}>
              <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt=""
                width="30"
                height="24"
              />
              <Offcanvas.Title>GoRoom</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ paddingTop: "0" }}>
              <hr />
              <h6>My classroom</h6>
              <>
                {Items.map((items, index) => (
                  <MenuItems
                    key={index}
                    title={items.title}
                    icon={items.icon}
                    to={items.to}
                    onHide={handleInactive}
                  />
                ))}
              </>
            </Offcanvas.Body>
          </Offcanvas>
        </Sdiv>
      </Snav>
    </div>
  );
};

export default Navbar;
