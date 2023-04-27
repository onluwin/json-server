import { Modal } from '../Modal';
import { RegisterForm } from 'components/header/AuthModalForms/Registration/RegisterForm';

export const RegisterModal = ({ handleCloseModal, handleSubmit }) => {
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <RegisterForm handleSubmit={handleSubmit} />
    </Modal>
  );
};
