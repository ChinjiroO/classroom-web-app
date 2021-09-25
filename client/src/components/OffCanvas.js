import React from "react";
import { Offcanvas } from "react-bootstrap";
import { MenuItems } from "./Navbar";

export function OffCanvas(active, handleInactive, isLoading, classrooms) {
  return <Offcanvas show={active} onHide={handleInactive}>
    <Offcanvas.Header closeButton style={{ paddingBottom: "0" }}>
      <img
        src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
        alt=""
        width="30"
        height="24" />
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
              onHide={handleInactive} />
          ))}
        </div>
      )}
    </Offcanvas.Body>
  </Offcanvas>;
}
