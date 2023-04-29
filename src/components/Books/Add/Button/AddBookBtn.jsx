import { StyledAddBookBtn } from './AddBookBtn.styled';

export const AddBookBtn = ({ openAddBookModal }) => {
  return (
    <StyledAddBookBtn onClick={() => openAddBookModal(true)}>
      Add book
    </StyledAddBookBtn>
  );
};
