import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todo from "./components/Todo";
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import "./App.css";

function App() {
  const name = "Bishal Udash";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  // get totos
  const getTodos = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(res.data);
  };

  // Mark complete
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

  // delete todo
  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let res = [...todos.filter((todo) => todo.id !== id)];
    setTodos(res);
  };

  // add todo
  const addTodo = async (title) => {
    let res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    });
    console.log(res.data);    
    setTodos([...todos, res.data]);
  };

  return (
    <Router>
      <div className="App">
        <Route path={"/" || "/dashboard"}>
          <div>Hello {name}</div>
          <AddTodo addTodo={addTodo} />
          <Todo
            todos={todos}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
          />
        </Route>

        <Route exact path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
