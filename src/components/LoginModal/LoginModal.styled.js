import styled from '@emotion/styled';

export const StyledLoginBackdrop = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: fixed;
  top: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 0, 0, 0.2);
`;

export const StyledLoginModal = styled.div`
  width: 300px;
  min-height: 360px;
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`;
