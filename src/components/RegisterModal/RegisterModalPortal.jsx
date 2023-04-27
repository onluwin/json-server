import { createPortal } from 'react-dom';

import { RegisterModal } from './RegisterModal';

export const RegisterModalPortal = ({
  handleCloseModal,
  handleRegisterSubmit,
}) =>
  createPortal(
    <RegisterModal
      handleCloseModal={handleCloseModal}
      handleSubmit={handleRegisterSubmit}
    />,
    document.querySelector('#register-modal')
  );
