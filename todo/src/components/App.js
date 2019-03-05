import React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibilityTodoList';
import Footer from './Footer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


export default App;
