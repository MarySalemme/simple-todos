import React, { Component } from 'react';

import Task from './Task.jsx';

export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is my first task'},
      { _id: 2, text: 'This is my second task'},
      { _id: 3, text: 'This is my third task'},
    ];
  }

  renderTask() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTask()}
        </ul>
      </div>
    );
  }
}
