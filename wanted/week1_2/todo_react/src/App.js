import React, { useState } from 'react';
import './App.css';
import InputTask from './components/Task';
import TaskList from './components/TodoBoard';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputTask setTodoList={setTodoList}/>
      <TaskList setTodoList={setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;