import { Toaster } from 'react-hot-toast';

import { StyledLogOutBtn, StyledLoginBtn } from './LoginBtn.styled';

export const LoginBtn = ({ isLoggedIn, logOut, openModal }) => {
  return (
    <>
      {isLoggedIn ? (
        <StyledLogOutBtn onClick={() => logOut()}>Log Out</StyledLogOutBtn>
      ) : (
        <StyledLoginBtn onClick={() => openModal(true)}>Log In</StyledLoginBtn>
      )}
      <Toaster />
    </>
  );
};
