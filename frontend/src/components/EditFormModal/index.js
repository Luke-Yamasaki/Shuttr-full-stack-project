import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from '../Forms/EditImageForm';

function EditFormModal({imageObj}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onCloseModal={() => setShowModal(false)}>
          <EditForm imageObj={imageObj} />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
