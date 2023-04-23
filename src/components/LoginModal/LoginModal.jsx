import { createPortal } from 'react-dom';

import { Modal } from './Modal';

export const LoginModal = ({ setIsLoginModalVisible }) =>
  createPortal(
    <Modal setIsLoginModalVisible={setIsLoginModalVisible} />,
    document.querySelector('#login-modal')
  );
