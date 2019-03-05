import React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibilityTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


export default App;
