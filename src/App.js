import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodosList from "./Components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
      {/* <form className="input-content">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          disabled={!input}
          type="submit"
          onClick={handleClick}
          variant="primary"
        >
          Add Todo
        </Button>
      </form>
      <div className="display-content">
        {todos.map((todo, i) => {
          return (
            <div className="list-item">
              <div>{todo}</div>
              <CloseButton onClick={() => removeOnClick(i)} />
            </div>
          );
        })}
        <Button onClick={() => setTodos([])}>Refresh List </Button>
      </div>*/}
    </div>
  );
}

export default App;
