import { Modal } from '../../../Modal/Modal';
import { AddBookForm } from '../Form/AddBookForm';

export const AddBookModal = ({ handleCloseModal, handleSubmit }) => {
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <AddBookForm onSubmit={handleSubmit} />
    </Modal>
  );
};
