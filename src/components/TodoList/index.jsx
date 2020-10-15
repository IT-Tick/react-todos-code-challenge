import React, { useContext } from 'react';
import TodoItem from '../TodoItem';
import { Context } from '../../Redux/store'
function TodoList() {
  const [state, dispatch] = useContext(Context)
  return (
    <div>
      {
        state.todos.map((todo, index) => {
          return (<TodoItem key={index} todo={todo} dispatch={dispatch} />)
        })
      }
    </div>
  );
}

export default TodoList;
