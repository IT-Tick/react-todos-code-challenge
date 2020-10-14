import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions';

import styles from './styles.module.sass';

function TodoItem({ item, onDeleteItem, onCompleteItem, onModifyItem }) {
  const [showModifyInput, setShowModifyInput] = useState(false);
  const [modifyInput, setModifyInput] = useState('')
  const inputRef = useRef(null);

  //conditional style for the completed items
  const titleStyles = [styles.title];

  useEffect(() => {
    if (showModifyInput) {
      inputRef.current.focus();
    }
  }, [showModifyInput])

  const inputChangeHandler = (event) => {
    setModifyInput(event.target.value)
  }

  // modify item after pressing enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onModifyItem(item.id, modifyInput);
      setShowModifyInput(false);
    }
  }
  if (item.completed) {
    titleStyles.push(styles.completed)
  }

  return (
    <div className={styles.card}>
      {showModifyInput ?
        <input
          ref={inputRef}
          onChange={inputChangeHandler}
          onKeyDown={handleKeyDown}
          className={styles.modifyInput}
          type="text"
          placeholder="write the title and press enter" />
        : <h2 className={titleStyles.join(' ')}>{item.title}</h2>}
      <button onClick={() => onCompleteItem(item.id)} className={styles.completeBtn}>{item.completed ? 'Uncomplete' : 'Complete'}</button>
      <button onClick={() => setShowModifyInput(prevState => !prevState)} className={styles.modifyBtn}>Modify</button>
      <button onClick={() => onDeleteItem(item.id)} className={styles.deleteBtn}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: (id) => {
      dispatch(actions.deleteItem(id))
    },
    onCompleteItem: (id) => {
      dispatch(actions.completeItem(id))
    },
    onModifyItem: (id, modifiedInput) => {
      dispatch(actions.modifyItem(id, modifiedInput))
    },
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
