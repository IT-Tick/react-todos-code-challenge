import React from 'react';
import styles from './styles.module.sass';

function TodoItem({ todo, dispatch }) {

  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todo.id
    })
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{todo.title}</h2>
      <button className={styles.completeBtn}>Complete</button>
      <button className={styles.deleteBtn}
      onClick = {handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
