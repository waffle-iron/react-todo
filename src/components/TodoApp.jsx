import React, { PropTypes } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.storage.load() || { todos: [] }

    this.handleCommit = this.handleCommit.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  setState(data) {
    super.setState(data)
    this.props.storage.save(data)
  }

  handleCommit({ value }) {
    const todos = this.state.todos
    const maxId = todos.length === 0 ? 0 : Math.max(...todos.map(t => t.id))
    const newTodo = { id: maxId + 1, text: value, done: false }
    this.setState({ todos: todos.concat(newTodo) })
  }

  handleDone({ id, done }) {
    const found = this.state.todos.find(todo => todo.id === id)
    if (found) {
      found.done = done
      this.setState({ todos: this.state.todos })
    }
  }

  handleDelete({ id }) {
    const { todos } = this.state
    const deleted = todos.filter(todo => todo.id !== id)
    this.setState({ todos: deleted })
  }

  render() {
    return (
      <div>
        <TodoInput onCommit={this.handleCommit} />
        <TodoList
          todos={this.state.todos}
          onDone={this.handleDone}
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}

TodoApp.propTypes = {
  storage: PropTypes.object.isRequired
}
