import React from 'react';
import styles from './styles.module.sass';
import EditModal from '../EditModal/editModal'
function TodoItem({ todo, dispatch }) {
  const { completed } = todo
  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todo.id
    })
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}
        style={{ textDecoration: completed ? 'line-through gray' : 'none' }}>
        {todo.title}
      </h2>
      <button className={completed ? styles.disabledBtn : styles.completeBtn}
        disabled={completed}>Complete</button>

      <button className={completed ? styles.disabledBtn : styles.deleteBtn}
       disabled={completed}
        onClick={handleDelete}>Delete</button>

      <EditModal todo={todo} dispatch={dispatch} />
    </div>
  );
}

export default TodoItem;
