import React, { useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";

export default function FinishButton({ deleteWholeList }) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <div >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="myToast">
          <Toast.Header style={{backgroundColor:"#007FFF", color:"white"}}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Congratulations</strong>
            <small>Now</small>
          </Toast.Header>
          <Toast.Body style={{backgroundColor:"#3399FF", color:"white"}}>Woohoo, You have finished all!</Toast.Body>
        </Toast>
      </div>
      <Col>
        <Button
          onClick={() => {
            deleteWholeList();
            setShow(true);
          }}
        >
          Finish the list!!!
        </Button>

        {/* <Button onClick={() => setShow(true)}>Show Toast</Button> */}
      </Col>
    </Row>
  );
}
