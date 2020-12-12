import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
// import axios from 'axios';

function App() {
  const name = "Bishal Udash";
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn react", completed: false },
    { id: 2, title: "Integrate with BE", completed: false },
    { id: 3, title: "Eat food", completed: true },
  ]);

  const markComplete = (id) => {
    // console.log(id);
    let res = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(res);
  };

  return (
    <div className="App">
      <div>Hello {name}</div>
      <Todo todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default App;
