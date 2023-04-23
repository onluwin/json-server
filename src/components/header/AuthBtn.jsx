import { Toaster } from 'react-hot-toast';
import { StyledLogOutBtn, StyledLoginBtn } from './User.styled';

export const AuthBtn = ({ isLoggedIn, logOut, setIsLoginModalVisible }) => {
  return (
    <>
      {isLoggedIn ? (
        <StyledLogOutBtn onClick={() => logOut()}>Log Out</StyledLogOutBtn>
      ) : (
        <StyledLoginBtn onClick={() => setIsLoginModalVisible(true)}>
          Log In
        </StyledLoginBtn>
      )}
      <Toaster />
    </>
  );
};
