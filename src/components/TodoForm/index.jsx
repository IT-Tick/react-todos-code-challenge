import React, { useState } from 'react';
import { addTodo } from '../redux/action';
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
import styles from './styles.module.sass';

function TodoForm() {
  let [name, setName] = useState();
  let  dispatch = useDispatch();

  return (
    <form>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
      />
      <button 
      className={styles.addBtn}
      onClick={(e)=>{ 
        e.preventDefault();
        dispatch( 
          addTodo(
            {
              id: uuid(),
              name: name,
            }
        ));
          setName('');
      }}>Add</button>
    </form>
  );
}

export default TodoForm;
