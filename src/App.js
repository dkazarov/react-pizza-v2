import React from 'react';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';
import { nanoid } from 'nanoid';
import { Skeleton } from './components/PizzaBlock/Skeleton';

import './scss/app.scss';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://628cabfca3fd714fd036dae9.mockapi.io/items')
      .then((response) => response.json())
      .then((products) => {
        setItems(products);
        setIsLoading(false);
      });
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
            {isLoading
              ? [...new Array(6)].map(() => <Skeleton key={nanoid()} />)
              : items.map((obj) => <PizzaBlock key={nanoid()} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
