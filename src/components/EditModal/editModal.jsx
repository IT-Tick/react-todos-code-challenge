import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from '../TodoItem/styles.module.sass'
function EditModal({ todo }) {
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.editBtn} variant="primary" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit selected task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder='edit me' value={newTitle}
            onChange={e => setNewTitle(e.target.value)}>
          </input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;