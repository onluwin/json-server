import { StyledUserAvatar } from './User.styled';

export const UserAvatar = ({ username, backgroundColor }) => {
  const firstLetter = username.slice(0, 1).toUpperCase();

  return (
    <StyledUserAvatar backgroundColor={backgroundColor}>
      {firstLetter}
    </StyledUserAvatar>
  );
};
