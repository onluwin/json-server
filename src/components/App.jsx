import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from './header/Header';
import { LoginModalPortal } from './LoginModal/LoginModalPortal';
import { toast } from 'react-hot-toast';
import { BooksList } from './Books/BooksList';
import { RegisterModalPortal } from './RegisterModal/RegisterModalPortal';
import { getRandomHexColor } from 'utils/getRandomColor';

axios.defaults.baseURL = 'http://localhost:7777';

export const App = () => {
  // const [books, setBooks] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);

  // NEW
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({
    name: username,
    books: [],
    profile: { color: null },
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [initRender, setInitRender] = useState(false);

  useEffect(() => {
    try {
      const lsUser = localStorage.getItem('user');
      const parsedUser = JSON.parse(lsUser);
      if (parsedUser) {
        setUser(parsedUser);
        setUsername(parsedUser.name);
        setIsLoggedIn(true);
      }
      setInitRender(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setUserToLocalStorage = user => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  };

  const registerUser = async username => {
    await axios.post('/users', {
      name: username,
      books: [],
      profile: {
        color: getRandomHexColor(),
      },
    });
    setIsRegisterModalVisible(false);
    // setUser(response.data);
    // return setUserToLocalStorage(user);
  };
  const loginUser = async user => {
    setUser(user);
    setUserToLocalStorage(user);
    setIsLoggedIn(true);
    setIsLoginModalVisible(false);
  };
  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   const username = e.currentTarget.elements.username.value;

  //   setUsername(username);

  //   // Hide modal
  //   setIsLoginModalVisible(false);

  //   const allUsers = await axios.get('/users');
  //   const { data } = allUsers;
  //   console.log('allUsers до post', data);
  //   const searchedUser = data.find(user => user.name === username);
  //   if (!searchedUser) {
  //     return registerUser(username);
  //   }
  //   loginUser(searchedUser);

  //   toast.success('Вы успешно вошли в аккаунт', { position: 'bottom-right' });
  // };

  const handleLoginSubmit = async e => {
    e.preventDefault();

    const username = e.currentTarget.elements.username.value;

    // Get all user
    const { data } = await axios.get('/users');

    // Find user in database
    const searchedUser = data.find(user => user.name === username);
    if (!searchedUser) {
      return toast.error('Такого пользователя еще не существует', {
        position: 'bottom-right',
      });
    }
    setUsername(username);
    await loginUser(searchedUser);
    setIsLoggedIn(true);
    toast.success('Вы успешно вошли в аккаунт', {
      position: 'bottom-right',
    });
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();

    const username = e.currentTarget.elements.username.value;
    try {
      await registerUser(username);
      toast.success('Вы успешно зарегестрировали новый аккаунт', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {initRender && (
        <Header
          username={username}
          userBgColor={user.profile.color}
          setUsername={setUsername}
          setUser={setUser}
          setIsLoginModalVisible={setIsLoginModalVisible}
          setIsRegisterModalVisible={setIsRegisterModalVisible}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
      )}

      {user.books.length === 0 && user.name !== '' ? (
        <p>You do not have any books yet...</p>
      ) : (
        <BooksList data={user.books} />
      )}

      {isLoginModalVisible && (
        <LoginModalPortal
          handleCloseModal={setIsLoginModalVisible}
          handleLoginSubmit={handleLoginSubmit}
        />
      )}
      {isRegisterModalVisible && (
        <RegisterModalPortal
          handleCloseModal={setIsRegisterModalVisible}
          handleRegisterSubmit={handleRegisterSubmit}
        />
      )}
    </div>
  );
};
