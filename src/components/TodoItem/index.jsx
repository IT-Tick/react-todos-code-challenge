import React, { useState } from 'react';

import { connect } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../../redux/actions";
import PropTypes from 'prop-types';
import styles from './styles.module.sass';

function TodoItem({ id, todo, completed, removeTodo, toggleTodo, editTodo }) {
  const [input, setInput] = useState(todo)
  const [edit, setEdit] = useState(false)

  const onEditClick = () => {
    editTodo({ id, todo: input, completed })
    setEdit(false)
  }

  return (
    <div className={styles.card}>
      {
        edit
          ? <>
            <input value={input} className={styles.input} onChange={e => setInput(e.target.value)} />
            <br />
            <button onClick={onEditClick} className={styles.saveBtn}>Save</button>
          </>
          : <>
            <h2 className={completed ? styles.titleDone : styles.title}>{todo}</h2>
            <button onClick={() => setEdit(!edit)} className={styles.editBtn}>Edit</button>
          </>
      }

      <button onClick={() => toggleTodo(id)} className={styles.completeBtn}>Complete</button>
      <button onClick={() => removeTodo(id)} className={styles.deleteBtn}>Delete</button>

      {
        completed && <span>(Done)</span>
      }
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string,
  todo: PropTypes.string,
  completed: PropTypes.bool,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  editTodo: todo => dispatch(editTodo(todo)),
})

export default connect(null, mapDispatchToProps)(TodoItem);
