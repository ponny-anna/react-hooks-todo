import { CREATE_TODO, DELETE_TODO } from '../actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      const todo = {
        id,
        content: action.content,
        date: new Date().toString()
      }
      return [todo, ...state]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
