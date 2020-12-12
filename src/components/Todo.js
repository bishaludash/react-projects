import React from "react";
import PropTypes from "prop-types";
import Todolist from "./Todolist";

export class Todo extends React.Component {

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <Todolist
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete}
          />
        ))}
      </ul>
    );
  }
}

// PropTypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todo;
