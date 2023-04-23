import { AiOutlineCloseCircle } from 'react-icons/ai';

import { StyledLoginBackdrop, StyledLoginModal } from './LoginModal.styled';
import { CloseLoginModalBtn } from './CloseLoginModalBtn.styled.js';

export const Modal = ({ setIsLoginModalVisible }) => {
  return (
    <StyledLoginBackdrop>
      <StyledLoginModal>
        Modal
        <CloseLoginModalBtn
          type="CloseLoginModalBtn"
          onClick={() => setIsLoginModalVisible(false)}
        >
          <AiOutlineCloseCircle size={25} style={{ margin: 'auto' }} />
        </CloseLoginModalBtn>
      </StyledLoginModal>
    </StyledLoginBackdrop>
  );
};
