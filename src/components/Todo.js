import React, { useContext } from 'react'

import { DELETE_TODO } from '../actions'
import Context from '../contexts/Context'

const Todo = ({ todo }) => {
  const { dispatch } = useContext(Context)
  const id = todo.id
  const deleteTodo = e => {
    e.preventDefault()
    dispatch({
      type: DELETE_TODO,
      id
    })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{todo.content}</td>
      <td>{todo.date}</td>
      <td>
        <button type="button" onClick={deleteTodo}>
          削除
        </button>
      </td>
    </tr>
  )
}

export default Todo
