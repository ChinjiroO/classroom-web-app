import React, { useState } from 'react'
import { MdAssignment, MdPeople } from 'react-icons/md'
import { CgFeed } from 'react-icons/cg'
import { HiMenu } from 'react-icons/hi'
import { Snav, Sdiv, Sa, Sbutton, Slink, Sitem } from './Styled'
import { Offcanvas, Container } from 'react-bootstrap'

//* menu items
export const Items = [
    {
        title: "Feed",
        to: "/dashboard/",
        icon: <CgFeed size="2em"/>, 
    },
    {
        title: "Classwork",
        to: "/dashboard/classwork",
        icon: <MdAssignment size="2em"/>, 
    },
    {
        title: "Member",
        to: "/dashboard/member",
        icon: <MdPeople size="2em"/>, 
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
    )
}
const darkIcon = {fontSize: "1.5rem", backgroundColor: "transparent"}

const Navbar = (props) => {
    const [active, setActive] = useState(false);

    const handleActive = () => setActive(true);
    const handleInactive = () => setActive(false);

    return (
        <div>
            <Snav className="navbar navbar-light">
                <Sdiv className="container-fluid">  
                    {/*//! Brand name */}
                    <Sa className="navbar-brand" href="/">
                        <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" style={{marginRight: "10px"}}/>
                        GoRoom
                    </Sa>
                    {/*//! User Profile */}
                    {/* <div>

                    </div> */}
                    {/*//! Toggler */}
                    <Sbutton onClick={handleActive} >
                        <HiMenu style={darkIcon} />
                    </Sbutton>                                    

                    {/*//! OffCanvas */}
                    <Offcanvas show={active} onHide={handleInactive}>
                        <Offcanvas.Header closeButton style={{paddingBottom: "0"}}>
                            <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
                            <Offcanvas.Title>GoRoom</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{paddingTop: "0"}}>
                            <hr />
                            <h6>My classroom</h6>
                            <>                                
                                {Items.map((items, index) => (
                                    <MenuItems 
                                        key={index}
                                        title={items.title}
                                        icon={items.icon}
                                        to={items.to}
                                    />
                                ))}                                
                            </>
                        </Offcanvas.Body>
                    </Offcanvas>

                </Sdiv>
            </Snav>
        </div>
    )
}

export default Navbar