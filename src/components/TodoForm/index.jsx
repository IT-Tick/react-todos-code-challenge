/* eslint-disable linebreak-style */
import React from 'react';

import styles from './styles.module.scss';

function TodoForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
      />
    </form>
  );
}

export default TodoForm;
