import { LoginForm } from 'components/header/AuthModalForms/Login/LoginForm';

import { Modal } from '../Modal';

export const LoginModal = ({ handleCloseModal, handleSubmit }) => {
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <LoginForm handleSubmit={handleSubmit} />
    </Modal>
  );
};
