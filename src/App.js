import "./App.css";
import MyForm from "./components/MyForm";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Button, Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import FinishButton from "./components/FinishButton";

function App() {
  const [todos, setTodos] = useState([
    {
      item: "Buy ice cream",
      done: false,
      id: nanoid(),
    },
    {
      item: "Eat ice cream",
      done: false,
      id: nanoid(),
    },
    {
      item: "Go to gym",
      done: false,
      id: nanoid(),
    },
    {
      item: "Go to swim",
      done: false,
      id: nanoid(),
    },
    {
      item: "Go to supermarket",
      done: false,
      id: nanoid(),
    },
  ]);

  const addNewTodo = (newTodo) => {
    const newTodos = [...todos, { item: newTodo, done: false, id: nanoid() }];
    setTodos(newTodos);
    saveOnLocalStorage(newTodos);
  };

  const deleteWholeList = () => {
    setTodos([]);
    saveOnLocalStorage([]);
  };

  const crossTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      else if (todo.id === id) {
        if (todo.done === false)
          return {
            ...todo,
            done: true,
          };
        else if (todo.done === true)
          return {
            ...todo,
            done: false,
          };
      }
    });
    setTodos(newTodos);
    saveOnLocalStorage(newTodos);
  };

  const editTodo = (id, newTodoItem) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      else if (todo.id === id)
        return {
          ...todo,
          item: newTodoItem,
        };
    });
    setTodos(newTodos);
    saveOnLocalStorage(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveOnLocalStorage(newTodos);
  };

  const saveOnLocalStorage = (newTodos) => {
    localStorage.setItem("domTodoList", JSON.stringify(newTodos));
  };

  useEffect(() => {
    //checking local storage if it has data
    let oldTodos = JSON.parse(localStorage.getItem("domTodoList"));
    if (oldTodos) setTodos(oldTodos);
  }, []);

  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="list-items">
            <h1 style={{marginBottom: "30px"}}>Things I should stop procrastinating</h1>
            <ListGroup as="ol" numbered>
              {todos.map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  crossTodo={crossTodo}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                ></Todo>
              ))}
            </ListGroup>
          </div>
          <MyForm addNewTodo={addNewTodo} />
          <FinishButton deleteWholeList={deleteWholeList} />
        </div>
      </div>
    </div>
  );
}

export default App;
