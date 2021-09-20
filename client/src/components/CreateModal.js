import React from 'react'
import { Form, Modal, Button, FloatingLabel } from 'react-bootstrap'
import styled from 'styled-components'

function CreateModal(props) {
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
        <>
        <FloatingLabel controlId="ClassName" label="Class name" className="mb-3">
          <Form.Control type="text" placeholder="Class name" required/>
        </FloatingLabel>
        <FloatingLabel controlId="Room" label="Room" className="mb-3">
          <Form.Control type="text" placeholder="Room" />
        </FloatingLabel>
        <FloatingLabel controlId="Subject" label="Subject" className="mb-3">
          <Form.Control type="text" placeholder="Subject" />
        </FloatingLabel>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={props.onHide}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateModal
