import React, { useState } from 'react'
import axios from 'axios'
import { Form, Modal, Button, FloatingLabel } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ObjectID } from 'bson';

function CreateModal(props) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [classRoom, setClassRoom] = useState({
    _id: ObjectID(),
    nameOfClass: "",
    room: "",
    subject: "",
    members: user.result.googleId,
    leader: user.result.googleId
  });
  let nameOfClass, room, subject, value, members;
  let history = useHistory();

  const onChangeClassName = (e) => {
    nameOfClass = e.target.nameOfClass;
    value = e.target.value;
    setClassRoom( {...classRoom, nameOfClass: value});
  };
  const onChangeRoom = (e) => {
    room = e.target.room;
    value = e.target.value;
    setClassRoom( {...classRoom, room: value});
  };
  const onChangeSubject = (e) => {
    subject = e.target.subject;
    value = e.target.value;
    setClassRoom( {...classRoom, subject: value});
  };
  const onCreate = (e) => {  
    e.preventDefault();    
    axios
      .post("http://goroom.herokuapp.com/classroom/add", classRoom)
      .then((res) => console.log(res.data));    
    console.log("Create a new classroom successful"); 
    const _id = classRoom._id;
    console.log(_id); 
    // history.push(`/h`);
    setTimeout(() => window.location.reload(), 100);
    history.push(`/h/${_id}/feed`);
      
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
          <FloatingLabel controlId="ClassName" label="Class name" className="mb-3">
            <Form.Control  
              defaultValue={classRoom.nameOfClass} 
              onChange={onChangeClassName}
              type="text" placeholder="Class name" 
            />
          </FloatingLabel>
          <FloatingLabel controlId="Room" label="Room" className="mb-3">
            <Form.Control 
              defaultValue={classRoom.room}
              onChange={onChangeRoom}
              type="text" placeholder="Room" 
            />
          </FloatingLabel>
          <FloatingLabel controlId="Subject" label="Subject" className="mb-3">
            <Form.Control 
              defaultValue={classRoom.Subject}
              onChange={onChangeSubject}
              type="text" placeholder="Subject" 
            />
          </FloatingLabel>
        <Button type="submit" value="Submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default CreateModal
