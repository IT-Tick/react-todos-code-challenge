import React, { useState, useContext } from 'react';
import { Context } from '../../Redux/store'
import styles from './styles.module.sass';
import {getRandomNumber} from '../../utils/helperFunctions'
function TodoForm() {
  const [input, setInput] = useState('')
  const [state, dispatch] = useContext(Context)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      {
        type: 'ADD_TODO',
        payload: {
          id: getRandomNumber(state.todos),
          title: input,
          completed: false
        }
      }
    )
  }
  
  return (
    <form onSubmit = {handleSubmit}>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
