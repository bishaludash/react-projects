import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class Todolist extends React.Component {
  getStyles = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    // destructure form props
    const { id, title } = this.props.todo;
    return (
      <Fragment>
        <li style={this.getStyles()}>
          <input
            type="checkbox" checked={this.props.todo.completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button style={btnStyle} onClick ={this.props.deleteTodo.bind(this, id)}>X</button>
        </li>
      </Fragment>
    );
  }
}

// PropTypes
Todolist.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  cursor: "pointer",
  borderRadius: "50%",
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  marginLeft: "5px",
  padding: "5px 10px",
};
export default Todolist;
