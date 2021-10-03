import React, { useState } from "react";
import axios from "axios";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { ObjectID } from "bson";

function CreateTopic(props) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();
  const history = useHistory();
  const [topic, setTopic] = useState({
    _id: ObjectID(),
    title: "",
    classroom_id: id,
    items: [
      {
        Ititle: "",
        description: "",
        attachments: "",
      },
    ],
  });
  let title, value;
  const reloads = () => {
    setTimeout(() => window.location.reload(), 5000);
  }

  const onChangeTitle = (e) => {
    title = e.target.title;
    value = e.target.value;
    setTopic({ ...topic, title: value });
  };
  //* Create a new Topic
  const onCreate = async (e) => {
    e.preventDefault();
    const newTopic = topic;
    console.log(newTopic);
    axios
      .post("http://localhost:5000/topics/add", newTopic)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log("Create a new topic successful");
    reloads();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onCreate}>
          <FloatingLabel
            controlId="Topic"
            label="Topic"
            className="mb-3"
          >
            <Form.Control
              defaultValue={topic.title}
              onChange={onChangeTitle}
              type="text"
              placeholder="Topic"
              required={true}
            />
          </FloatingLabel>

          <Button type="submit" value="Submit" >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateTopic;
