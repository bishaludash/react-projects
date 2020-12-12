import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
// import axios from 'axios';

function App() {
  const name = "Bishal Udash";
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn react", completed: false },
    { id: 2, title: "Integrate with BE", completed: false },
    { id: 3, title: "Eat food", completed: true },
  ]);

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
  const deleteTodo = (id) =>{
    let res = [...todos.filter(todo => todo.id !== id)];
    setTodos(res);
  }

  // add todo
  const addTodo = (title) =>{
    const newTodo = {id:todos.length+1, title:title, completed: false}
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <div>Hello {name}</div>
      <AddTodo addTodo={addTodo}/>
      <Todo todos={todos} markComplete={markComplete} deleteTodo = {deleteTodo}/>
    </div>
  );
}

export default App;
