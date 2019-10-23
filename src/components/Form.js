import React, { useState, useContext } from 'react'
import Context from '../contexts/Context'
import { CREATE_TODO } from '../actions'

const Form = () => {
  const { dispatch } = useContext(Context)
  const [content, setContent] = useState('')

  const addTodo = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_TODO,
      content
    })
    setContent('')
  }

  return (
    <>
      <form>
        <label htmlFor="content">内容:</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button onClick={addTodo}>追加</button>
      </form>
    </>
  )
}

export default Form
