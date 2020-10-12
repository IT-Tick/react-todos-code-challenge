import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';

import styles from './styles.module.sass';

function TodoItem({todo}) {
  let  dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);


  return (
    <div className={styles.card}>
      {edit? <input 
                type="text" 
                className={styles.input} 
                value={name}
                onChange={
                  (e)=> setName(e.target.value)
                } /> 
            :
            <h2 className={styles.title}>{todo.name}</h2>}
      <button 
      className={styles.completeBtn}
      onClick= {() => {
        dispatch(updateTodo(
          {
            ...todo,
            name: name,
          }
        ))
        if(edit) {
          setName(name);
        }
        setEdit(!edit)
      }}
      >{edit? 'Update': 'Edit'}</button>
      <button 
        className={styles.deleteBtn}
        onClick={()=> dispatch(deleteTodo(todo.id))}
      >Delete</button>
    </div>
  );
}

export default TodoItem;
