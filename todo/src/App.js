import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList list="test" />
    </div>
  );
}

export default App;
