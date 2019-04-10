import React from 'react';
import TodoItem from './TodoItem';

const TodoList =  ({todos, ...actionProps}) => {
  const todoList = todos.map((todo) =>
        <TodoItem
          key={todo.id}
          todoItem={todo}
          {...actionProps}
        />
    )
  return (
    <ul className="list-group">
        {todoList}
    </ul>
  );

}

export default TodoList;
