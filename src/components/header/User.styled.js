import styled from '@emotion/styled';

import { getRandomHexColor } from '../../utils/getRandomColor';

export const StyledUserAvatar = styled.span`
  display: flex;
  width: 40px;
  height: 40px;
  background-color: ${() => getRandomHexColor()};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-right: 20px;
`;

export const StyledLoginBtn = styled.button`
  width: 65px;
  margin-right: 10px;
  background-color: #2196f3;
`;

export const StyledLogOutBtn = styled.button`
  width: 65px;
  margin-right: 10px;
  background-color: #f44336;
`;
