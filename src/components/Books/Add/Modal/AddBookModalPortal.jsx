import { createPortal } from 'react-dom';

import { AddBookModal } from './AddBookModal';

export const AddBookModalPortal = ({ handleCloseModal, handleAddBookSubmit }) =>
  createPortal(
    <AddBookModal
      handleCloseModal={handleCloseModal}
      handleSubmit={handleAddBookSubmit}
    />,
    document.querySelector('#register-modal')
  );
