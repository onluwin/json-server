import styled from '@emotion/styled';

export const StyledUserAvatar = styled.span`
  display: flex;
  width: 40px;
  height: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-right: 20px;
`;
