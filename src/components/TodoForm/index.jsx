import React, {useState} from 'react';

import styles from './styles.module.sass';

function TodoForm() {
  const [input, setInput] = useState('')
  return (
    <form>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        value={input}
        onChange={ e => setInput(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
