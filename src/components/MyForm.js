import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const MyForm = ({ addNewTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value!=="") addNewTodo(value);
    setValue("");
  };

  return (
    <div style={{marginBottom:"-20px"}}>
      <InputGroup className="mb-3" style={{width: "400px"}}>
        <FormControl
          value={value}
          onChange={handleChange}
          placeholder="Your new task!!!"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSubmit}
          variant="primary"
        >
          Add Task
        </Button>
      </InputGroup>
      <br />
    </div>
  );
};

export default MyForm;
