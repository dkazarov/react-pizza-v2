import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';

import { Header } from './components/Header';

import './scss/app.scss';

export const SearchContext = React.createContext('defaultValue');

const App = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
