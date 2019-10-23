import React, { useReducer } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import Context from './contexts/Context'
import reducer from './reducers'

function App() {
  const initialState = { todos: [] }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <h1>TODOリスト</h1>
        <Form />
        <Todos />
      </Context.Provider>
    </>
  )
}

export default App
