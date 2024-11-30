import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllTodos } from '../redux/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Total Todos: {todos.length}</h4>
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {todos.length > 0 && (
        <button
          onClick={() => dispatch(deleteAllTodos())}
          className="btn btn-danger mt-3"
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default TodoList;


