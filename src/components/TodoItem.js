import React from 'react'

class TodoItem extends React.Component {
  render() {
    return <li type="checkbox">{this.props.todo.title}</li>
  }
}

export default TodoItem
