import { toast } from 'react-hot-toast';

import { HeaderContainer, StyledHeader } from './Header.styled';
import { UserAvatar } from './UserAvatar';
import { LoginBtn } from '../AuthBtns/LoginBtn';
import { RegisterBtn } from 'components/AuthBtns/RegisterBtn';

export const Header = ({
  username,
  userBgColor,
  setUsername,
  setUser,
  setIsLoginModalVisible,
  setIsRegisterModalVisible,
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
      </HeaderContainer>
    </StyledHeader>
  );
};
