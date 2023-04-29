import { toast } from 'react-hot-toast';

import { AuthBox, HeaderContainer, StyledHeader } from './Header.styled';
import { UserAvatar } from './UserAvatar';
import { LoginBtn } from '../AuthBtns/LoginBtn';
import { RegisterBtn } from 'components/AuthBtns/RegisterBtn';
import { AddBookBtn } from '../Books/Add/Button/AddBookBtn';

export const Header = ({
  username,
  userBgColor,
  setUsername,
  setUser,
  setIsLoginModalVisible,
  setIsRegisterModalVisible,
  setIsAddBookModalVisible,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  const logOut = () => {
    setUsername('');
    setUser({ name: '', books: [], profile: { color: null } });
    toast.success('Вы успешны вышли из аккаунта', { position: 'bottom-right' });
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <nav style={{ marginRight: 'auto', marginLeft: '20px' }}>
          {isLoggedIn && (
            <AddBookBtn openAddBookModal={setIsAddBookModalVisible} />
          )}
        </nav>
        <AuthBox>
          {!isLoggedIn && (
            <RegisterBtn openRegModal={setIsRegisterModalVisible} />
          )}
          <LoginBtn
            isLoggedIn={username === '' ? false : true}
            logOut={logOut}
            openModal={setIsLoginModalVisible}
          />
          {username !== '' && (
            <UserAvatar username={username} backgroundColor={userBgColor} />
          )}
        </AuthBox>
      </HeaderContainer>
    </StyledHeader>
  );
};
