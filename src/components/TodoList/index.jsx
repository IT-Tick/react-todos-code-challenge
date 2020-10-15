import React, { useContext } from 'react';
import TodoItem from '../TodoItem';
import { Context } from '../../Redux/store'
function TodoList() {
  const [state, dispatch] = useContext(Context)
  return (
    <div>
      {state.todos.map(todo => (
        <h1>
          {todo.title}
        </h1>
      ))}
    </div>
  );
}

export default TodoList;
