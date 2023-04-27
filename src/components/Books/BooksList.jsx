export const BooksList = ({ data }) => {
  return (
    <ul>
      {data.map(book => {
        return (
          <li key={book.title}>
            <h3>{book.title}</h3>
            <p>{book.text}</p>
          </li>
        );
      })}
    </ul>
  );
};
