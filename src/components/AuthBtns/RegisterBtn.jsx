import { StyledRegisterBtn } from './RegisterBtn.styled';

export const RegisterBtn = ({ openRegModal }) => (
  <StyledRegisterBtn onClick={() => openRegModal(true)}>
    Register
  </StyledRegisterBtn>
);
