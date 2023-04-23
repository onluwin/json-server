import { toast } from 'react-hot-toast';

import { HeaderContainer, StyledHeader } from './Header.styled';
import { UserAvatar } from './UserAvatar';
import { AuthBtn } from './AuthBtn';

export const Header = ({ userName, setUsername, setIsLoginModalVisible }) => {
  const logOut = () => {
    setUsername('');
    toast.success('Вы успешны вышли из аккаунта', { position: 'bottom-right' });
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <AuthBtn
          isLoggedIn={userName === '' ? false : true}
          logOut={logOut}
          setIsLoginModalVisible={setIsLoginModalVisible}
        />
        {userName !== '' && <UserAvatar userName={userName} />}
      </HeaderContainer>
    </StyledHeader>
  );
};
