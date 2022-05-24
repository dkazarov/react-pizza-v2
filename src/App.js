import React from 'react';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import { nanoid } from 'nanoid';

import './scss/app.scss';

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://628cabfca3fd714fd036dae9.mockapi.io/items')
      .then((response) => response.json())
      .then((products) => setItems(products));
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map((obj) => (
              <PizzaBlock key={nanoid()} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
