import React, { useState } from "react";
import {
  Badge,
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
} from "react-bootstrap";

export default function Todo({ todo, crossTodo, editTodo, deleteTodo }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(todo.item);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onChangeEditButton = (event) => {
    event.preventDefault();
    setEdit(event.target.value);
    console.log(event.target.value);
  };

  const onSubmitEditButton = () => {
    editTodo(todo.id, edit);
  };
  const textStyle = todo.done
    ? { textDecoration: "line-through 0.3px", fontStyle: "italic" }
    : { textDecoration: "none", fontStyle: "normal" };

  return (
    <div>
      <div as="li" style={textStyle} className="d-grid gap-2">
        {/* <span className="left"></span> */}

        <Button
          size="lg"
          style={{
            textAlign: "left",
            marginBottom: "10px",
            color: "",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{todo.item}</span>

          <span>
            <Badge
              bg="success"
              onClick={() => crossTodo(todo.id)}
              size="sm"
              className="myBadge"
            >
              {" "}
              {todo.done ? "Undone" : "Done"}
            </Badge>
            <Badge
              ton
              onClick={() => editTodo(todo.id)}
              onClick={handleOpen}
              bg="warning"
              text="dark"
              size="sm"
              className="myBadge"
            >
              Edit
            </Badge>
            <Badge
              bg="danger"
              onClick={() => {
                deleteTodo(todo.id);
              }}
              size="sm"
              className="myBadge"
            >
              Delete
            </Badge>
          </span>
        </Button>
      </div>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              // value={edit}
              onChange={onChangeEditButton}
              placeholder="Change the task..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(event) => {
              event.preventDefault();
              onSubmitEditButton();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
