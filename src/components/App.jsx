import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from './header/Header';
import { LoginModalPortal } from './LoginModal/LoginModalPortal';
import { toast } from 'react-hot-toast';
import { BooksList } from './Books/BooksList';
import { RegisterModalPortal } from './RegisterModal/RegisterModalPortal';
import { getRandomHexColor } from 'utils/getRandomColor';
import { AddBookModalPortal } from './Books/Add/Modal/AddBookModalPortal';

axios.defaults.baseURL = 'http://localhost:7777';

export const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({
    name: username,
    books: [],
    profile: { color: null },
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isAddBookModalVisible, setIsAddBookModalVisible] = useState(false);

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

  useEffect(() => {
    if (user.name === '') {
      return;
    }
    setUserToLocalStorage(user);
  }, [user]);

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
  };
  const loginUser = async user => {
    setUser(user);
    setIsLoggedIn(true);
    setIsLoginModalVisible(false);
  };

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

    const { data } = await axios.get('/users');
    if (data.some(({ name }) => name === username)) {
      return toast.error('Такой пользователь уже существует', {
        position: 'bottom-right',
      });
    }
    try {
      await registerUser(username);
      toast.success('Вы успешно зарегестрировали новый аккаунт', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBookSubmit = async e => {
    e.preventDefault();
    const formRef = e.currentTarget;
    const { title, text } = formRef.elements;
    const newBook = {
      title: title.value,
      text: text.value,
    };
    console.log(newBook);

    const { data } = await axios.get(`/users/${user.id}`);

    // Проверка на пустые input'ы
    if (newBook.title === '' || newBook.text === '') {
      return toast.error('Все поля должны быть заполнены', {
        position: 'bottom-right',
      });
    }

    // Проверка на имеющуюся книгу
    if (
      data.books.some(
        ({ title, text }) => title === newBook.title || text === newBook.text
      )
    ) {
      return toast.error('У вас уже есть такая книга', {
        position: 'bottom-right',
      });
    }

    const updatedUser = await axios.patch(`/users/${user.id}`, {
      books: [...data.books, newBook],
    });

    setUser(prevUser => ({ ...prevUser, books: updatedUser.data.books }));

    formRef.reset();
    setIsAddBookModalVisible(false);
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
          setIsAddBookModalVisible={setIsAddBookModalVisible}
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
      {isAddBookModalVisible && (
        <AddBookModalPortal
          handleCloseModal={setIsAddBookModalVisible}
          handleAddBookSubmit={handleAddBookSubmit}
        />
      )}
    </div>
  );
};
