import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  Modal,
  Button,
  FloatingLabel,
  CloseButton,
} from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { ObjectID } from "bson";
import styled from "styled-components";

const CreateItem = (props) => {
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [item, setItem] = useState({
    _id: ObjectID(id),
  });
  //* Get topics in current classroom
  useEffect(() => {
    const getTopic = async () => {
      const res = await axios
        .get("http://goroom.herokuapp.com/topics/" + id)
        .catch((err) => console.log(err));
      // setID(res.data[0]._id.toString());
      setTopics(res.data);
      return res;
    };
    getTopic();
  }, []);

  //* Create a new Item
  const onSubmit = async (e) => {};

  return (
    <Modal {...props} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FloatingLabel controlId="" label="Email address" className="mb-3">
            <Form.Control placeholder="" />
          </FloatingLabel>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                {topics.map((topic) => (
                  <option value={topic._id}>{topic.title}</option>
                ))}                
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateItem;

export const Sbutton = styled(Button)`
  box-sizing: content-box;
`;
