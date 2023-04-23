import { useState } from 'react';

import { Header } from './header/Header';
import { LoginModal } from './LoginModal/LoginModal';

// const baseURL = 'http://localhost:7777';

export const App = () => {
  // const [books, setBooks] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);

  // NEW
  const [username, setUsername] = useState('Nikita');
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  // useEffect(() => {
  //   async function fetchBooks() {
  //     setIsLoading(true);
  //     return await fetch(`${baseURL}/books`).then(response =>
  //       response.json().catch(console.log).finally(setIsLoading(false))
  //     );
  //   }
  //   fetchBooks().then(setBooks);
  // }, []);

  function renderBookList(data) {
    return (
      <>
        <ul>
          {data.map(item => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div>
      <Header
        userName={username}
        setUsername={setUsername}
        setIsLoginModalVisible={setIsLoginModalVisible}
      />

      {isLoginModalVisible && (
        <LoginModal setIsLoginModalVisible={setIsLoginModalVisible} />
      )}
    </div>
  );
};
