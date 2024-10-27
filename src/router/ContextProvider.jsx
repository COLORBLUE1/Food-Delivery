import React, { useEffect, useState } from 'react';
import { UserContext } from '../context/context';
import { App } from './App';

const ContextProvider = () => {
  const [user, setUser] = useState(() => {
    const guardado = localStorage.getItem('userInfo');
    return guardado ? JSON.parse(guardado) : {
      name: '',
      email: '',
      location: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />
    </UserContext.Provider>
  );
};

export default ContextProvider;
