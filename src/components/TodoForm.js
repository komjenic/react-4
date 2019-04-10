import React, { Component } from 'react';

class TodoForm extends Component {

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onNewTodoItem();
  }

  handleRefInputEvt = inputRef => {
    inputRef.focus();
  }

  handleInputTextChangeEvt = evt => {
    const todoText = evt.target.value;
    this.props.onTodoSearch(todoText);
  }

  render() {
    const {todoText} = this.props;

    return (
      <form className="form-group" onSubmit={this.handleFormSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Type to search or enter to add todo"
          ref={this.handleRefInputEvt}
          value = {todoText}
          onChange={this.handleInputTextChangeEvt}
        />
      </form>
    );
  }

}

export default TodoForm;
