/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import {format} from 'date-fns';
import {useDispatch} from 'react-redux';

import {actions} from '../../_redux_store/todos';
import TodoForm from '../TodoForm';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// eslint-disable-next-line no-unused-vars
import styles from './styles.module.scss';

function TodoView({todo = {}, setEditMode}) {
  const {id, text, completed, createdAt, modifiedAt} = todo;
  const dispatch = useDispatch();
  if (Object.keys(todo).length) {
    return (
      <ListItem
        key={id}
        dense
        button
        onClick={(_) => dispatch(actions.toggleCompleted(todo))}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            checked={completed}
            disableRipple
            inputProps={{'aria-labelledby': id}}
          />
        </ListItemIcon>
        <ListItemText
          id={id}
          primary={text}
          secondary={
            <>
              <div>
                createdAt: {format(new Date(createdAt), 'dd/MM/yyyy pp')}
              </div>
              <div>
                modifiedAt: {format(new Date(modifiedAt), 'dd/MM/yyyy pp')}
              </div>
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            color="primary"
            edge="end"
            aria-label="edit"
            onClick={(e) => setEditMode(true)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            edge="end"
            aria-label="delete"
            onClick={(_) => dispatch(actions.removeTodo(todo))}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
  return null;
}

TodoView.propTypes = {
  todo: PropTypes.object,
  setEditMode: PropTypes.func,
};

function TodoItem({todo}) {
  const [editMode, setEditMode] = React.useState(false);
  return editMode ? (
    <TodoForm todo={todo} editMode={editMode} setEditMode={setEditMode} />
  ) : (
    <TodoView todo={todo} setEditMode={setEditMode} />
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoItem;
