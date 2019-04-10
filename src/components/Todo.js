import React, { Component } from 'react';
import TodoForm from './TodoForm';
import FilterLinks from './FilterLinks';
import TodoList from './TodoList';
import TodosCount from './TodosCount';
import {ALL, ACTIVE, COMPLETED} from '../constants';

class todo extends Component {
state = {
  searchTerm: '',
  currentFilter: ALL,
  todos: []
};

handleNewTodoItem = () => {
  this.setState(({searchTerm, todos}) => {
    const todoItem = {
      todo: searchTerm,
      id: Date.now().toString(),
      completed: false
    }
    todos = [...todos, todoItem];
    return {
      todos,
      searchTerm: ''
    }
  })
}

handleDeleteBtnClick = (evt) => {
  const id = evt.target.value;
  this.setState(({todos}) => {
  todos = todos.filter( ({id: todoId}) => todoId !== id )
    return {
      todos
    }
  })
}

handleCheckboxClick = (evt) => {
  const id = evt.target.value;
  this.setState(({todos}) => {
    const index = todos.findIndex(({id: todoId}) => todoId ===id)
    const {todo, completed} = todos[index];
    todos = [
      ...todos.slice(0, index),
      {
        todo,
        id,
        completed: !completed
      },
      ...todos.slice(index + 1)
    ]
    return {
      todos
    }
  })
}
handleFilterChange = (evt, currentFilter) => {
  evt.preventDefault();
  this.setState(() => ({currentFilter}))
}

handleTodoSearch = (searchTerm) => {
  this.setState(() => ({searchTerm}))
}

filterTodos = () => {
  const {todos, currentFilter, searchTerm} = this.state;
  const filteredTodos = todos.filter(({todo, completed}) => {
      if ((!todo.includes(searchTerm))||
          (currentFilter === COMPLETED && !completed)||
          (currentFilter === ACTIVE && completed)) {
        return false
      }
      return true;
  });
  return filteredTodos;
}
  render() {
    const todos = this.filterTodos();
    const {
      state: {searchTerm, currentFilter},
      handleTodoSearch,
      handleNewTodoItem,
      handleFilterChange,
      handleDeleteBtnClick,
      handleCheckboxClick
    } = this;
    return (
      <div>
        <TodoForm
          todoText={searchTerm}
          onTodoSearch={handleTodoSearch}
          onNewTodoItem={handleNewTodoItem}
        />
        <FilterLinks
          currentFilter={currentFilter}
          onFilterChange={handleFilterChange}
        />
        <TodoList
          todos={todos}
          onDeleteBtnClick={handleDeleteBtnClick}
          onCheckboxClick={handleCheckboxClick}
        />
        <TodosCount todosCount={todos.length}
        />
      </div>
    );
  }

}

export default todo;
