import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
    // creating the actual TodoList which is an Unordered list,
    <ul>
        {/* Mapping over all the todos and displaying them individually with a key and their info. When you click on
        a list item, it triggers toggleTodo. */}
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  )
  
  TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
  }
  
  export default TodoList