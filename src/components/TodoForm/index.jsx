import React from 'react';

import styles from './styles.module.sass';

function TodoForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
      />
      <div>
        <button className={styles.btn}>+</button>
      </div>
    </form>
  );
}

export default TodoForm;
