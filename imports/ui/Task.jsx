import React, { Component, PropTypes } from 'react';

export deafult class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};
