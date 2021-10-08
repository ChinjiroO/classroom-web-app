import React, { useState } from "react";
import axios from "axios";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import { ObjectID } from "bson";

function CreateModal(props) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [classRoom, setClassRoom] = useState({
    _id: ObjectID(),
    nameOfClass: "",
    room: "",
    subject: "",
    members: user.result.googleId,
    leader: user.result.googleId,
  });
  let value;

  const onChangeClassName = (e) => {
    value = e.target.value;
    setClassRoom({ ...classRoom, nameOfClass: value });
  };
  const onChangeRoom = (e) => {
    value = e.target.value;
    setClassRoom({ ...classRoom, room: value });
  };
  const onChangeSubject = (e) => {
    value = e.target.value;
    setClassRoom({ ...classRoom, subject: value });
  };
  const onCreate = (e) => {
    e.preventDefault();
    axios
      .post("https://goroom.herokuapp.com/classroom/add", classRoom)
      .then((res) => console.log(res.data));
    // console.log("Create a new classroom successful");
    // const _id = classRoom._id;
    // console.log(_id);
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create class
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onCreate}>
          <FloatingLabel
            controlId="ClassName"
            label="Class name"
            className="mb-3"
          >
            <Form.Control
              defaultValue={classRoom.nameOfClass}
              onChange={onChangeClassName}
              type="text"
              placeholder="Class name"
            />
          </FloatingLabel>
          <FloatingLabel controlId="Room" label="Room" className="mb-3">
            <Form.Control
              defaultValue={classRoom.room}
              onChange={onChangeRoom}
              type="text"
              placeholder="Room"
            />
          </FloatingLabel>
          <FloatingLabel controlId="Subject" label="Subject" className="mb-3">
            <Form.Control
              defaultValue={classRoom.Subject}
              onChange={onChangeSubject}
              type="text"
              placeholder="Subject"
            />
          </FloatingLabel>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateModal;
