import React from 'react';

const TodoItem = ({todoItem: {todo, id, completed}, onCheckboxClick, onDeleteBtnClick}) =>
    <li className="list-group-item">
      <h3>
        <input
          type="checkbox"
          className="pull-left"
          checked={completed}
          value= {id}
          onChange={onCheckboxClick}
        />
        {todo}
        <button
          className="btn btn-default btn-danger pull-right"
          onClick={onDeleteBtnClick}
          value={id}
          >
            Delete</button>
      </h3>
  </li>


export default TodoItem;
