import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onDone, onDelete }) {
  return (
    <ul>
      {todos.map(t =>
        <TodoItem key={t.id} onDone={onDone} onDelete={onDelete} {...t} />)
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDone: PropTypes.func,
  onDelete: PropTypes.func
}
