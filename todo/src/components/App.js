import React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibilityTodoList';
import Footer from './Footer';

// this brings the components together
// AddTodo is the part where the user can add items to list
// VisibleTodoList is the actual list displaying
// Footer is the part where the users can filter the list

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


export default App;
