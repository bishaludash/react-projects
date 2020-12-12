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
    const {id, title } = this.props.todo
    return (
      <Fragment>
        <li style={this.getStyles()}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this,id)}
          />
          {title}
        </li>
      </Fragment>
    );
  }
}

// PropTypes
Todolist.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default Todolist;
