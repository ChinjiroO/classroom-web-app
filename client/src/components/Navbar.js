import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";
import { Snav, Sdiv, Sa, Sbutton, Slink, Sitem, Simage } from "./Styled";
import { Offcanvas, Container } from "react-bootstrap";
import * as actionType from "../constant/actionTypes";
import CreateModal from "./CreateModal";
import decode from 'jwt-decode'
import axios from "axios";

export const MenuItems = (props) => {
  const { title, _id } = props;
  return (
    <Container>
      <Slink to={_id} >
        <Sitem>
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

	const [classrooms, setClassrooms] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

  //get data from collection "classrooms"
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const res = await axios
				.get("http://localhost:9000/classroom")
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
              src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              style={{ marginRight: "10px" }}
            />
            GoRoom
          </Sa>
          {/*//! Toggler */}
          <div>
            <Sbutton className="logout" onClick={logout}>
              Logout
            </Sbutton>
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
              {isLoading ? (
                <div>Loading ...</div>
              ) : (
                <div>
                  {classrooms.map((items, index) => (
                    <MenuItems
                      key={index}
                      title={items.nameOfClass}
                      _id={items._id}
                      onHide={handleInactive}
                    />
                  ))}              
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </Sdiv>
      </Snav>
    </div>
  );
};

export default Navbar;
