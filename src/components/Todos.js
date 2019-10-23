import React, { useContext } from 'react'

import Context from '../contexts/Context'
import Todo from './Todo'

const Todos = () => {
  const { state } = useContext(Context)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TODO</th>
            <th>日付</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Todos
