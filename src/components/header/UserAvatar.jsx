import { StyledUserAvatar } from './User.styled';

export const UserAvatar = ({ userName }) => {
  const firstLetter = userName.slice(0, 1);

  return <StyledUserAvatar>{firstLetter}</StyledUserAvatar>;
};
