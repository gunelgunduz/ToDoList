import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, editTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={newText}
          onChange={e => setNewText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-success btn-sm me-2">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn btn-warning btn-sm me-2">Edit</button>
        )}
        <button
          onClick={() => dispatch(toggleComplete(todo.id))}
          className={`btn btn-sm me-2 ${todo.completed ? 'btn-secondary' : 'btn-success'}`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
