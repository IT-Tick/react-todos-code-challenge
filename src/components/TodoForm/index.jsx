import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import styles from './styles.module.sass';

function TodoForm({ list, onAddItem }) {

  const [inputField, setInputField] = useState('')
  const inputChangeHandler = event => {
    setInputField(event.target.value)
  }

  // submit form and adding new item when pressing enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addItem();
    }
  }

  const addItem = (event) => {
    if (event) {
      event.preventDefault()
    }
    // prevent adding empty list
    const trimmedInputField = inputField.trim();
    if (trimmedInputField !== '') {
      const newItem = {
        id: list.length + 1,
        title: trimmedInputField,
        completed: false
      };
      onAddItem(newItem);
      setInputField('');
    }
  }

  return (
    <form onSubmit={addItem} className={styles.form}>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        value={inputField}
        onChange={inputChangeHandler}
        onKeyDown={handleKeyDown}
      />
      <div>
        <button className={styles.btn}>+</button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (item) => {
      dispatch(actions.addItem(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
