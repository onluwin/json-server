import { AiOutlineCloseCircle } from 'react-icons/ai';

import { CloseLoginModalBtn } from '../Modal/CloseLoginModalBtn.styled.js';

import { StyledLoginBackdrop, StyledLoginModal } from './LoginModal.styled';

export const Modal = ({ handleCloseModal, children }) => {
  return (
    <StyledLoginBackdrop>
      <StyledLoginModal>
        <CloseLoginModalBtn
          type="button"
          onClick={() => handleCloseModal(false)}
        >
          <AiOutlineCloseCircle size={25} style={{ margin: 'auto' }} />
        </CloseLoginModalBtn>
        {children}
      </StyledLoginModal>
    </StyledLoginBackdrop>
  );
};
