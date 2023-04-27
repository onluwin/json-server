import { createPortal } from 'react-dom';

import { LoginModal } from './LoginModal';

export const LoginModalPortal = ({ handleCloseModal, handleLoginSubmit }) =>
  createPortal(
    <LoginModal
      handleCloseModal={handleCloseModal}
      handleSubmit={handleLoginSubmit}
    />,
    document.querySelector('#login-modal')
  );
