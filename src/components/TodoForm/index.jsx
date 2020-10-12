import React, { useState } from 'react';

import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import PropTypes from 'prop-types';
import styles from './styles.module.sass';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const onSubmit = e => {
    e.preventDefault()
    addTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="What do you have to do?"
        className={styles.input}
      />
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func
};

const mapDispatchToProos = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProos)(TodoForm);
