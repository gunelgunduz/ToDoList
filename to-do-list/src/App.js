import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
