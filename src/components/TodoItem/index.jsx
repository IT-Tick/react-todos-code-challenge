import React from 'react';

import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/actions";
import styles from './styles.module.sass';

function TodoItem({ id, todo, completed, removeTodo, toggleTodo }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{todo}</h2>
      {
        completed && <span>(Done)</span>
      }
      <button onClick={() => toggleTodo(id)} className={styles.completeBtn}>Complete</button>
      <button onClick={() => removeTodo(id)} className={styles.deleteBtn}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem);
