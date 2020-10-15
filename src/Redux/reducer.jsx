const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {...todo, title: action.payload.newTitle}
          }
          return todo
        })
      };
    default:
      return state
  }
}

export default Reducer;