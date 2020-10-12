/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import {nanoid} from 'nanoid';
import {useDispatch} from 'react-redux';
import {actions} from '../../_redux_store/todos';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

// eslint-disable-next-line no-unused-vars
import styles from './styles.module.scss';

function TodoForm({todo = {}, editMode, setEditMode = (v) => v}) {
  const dispatch = useDispatch();
  const [text, setText] = React.useState(todo ? todo.text : '');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 2) {
      if (editMode) {
        dispatch(
            actions.updateTodo({
              ...todo,
              text,
            }),
        );
        setEditMode(false);
      } else {
        dispatch(
            actions.addTodo({
              id: nanoid(8),
              text,
              completed: false,
              createdAt: new Date(),
              modifiedAt: new Date(),
            }),
        );
      }
    }
    setText('');
  };

  return (
    <form className="mb-05 flex-center" onSubmit={handleSubmit}>
      <FormControl className={editMode ? 'w-80' : 'w-100'}>
        <InputLabel htmlFor="my-input">
          {editMode ? 'Change Todo Text' : 'Add Todo Text'}
        </InputLabel>
        <Input
          id="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </FormControl>
      {editMode && (
        <IconButton
          className="mt-1"
          color="secondary"
          edge="end"
          aria-label="cancel"
          onClick={(e) => setEditMode(false)}
        >
          <CancelPresentationIcon />
        </IconButton>
      )}
    </form>
  );
}

TodoForm.propTypes = {
  todo: PropTypes.object,
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
};

export default TodoForm;
