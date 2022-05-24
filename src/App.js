import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import { nanoid } from 'nanoid';

import pizzas from './assets/db.json';

import './scss/app.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {pizzas.map((obj) => (
              <PizzaBlock key={nanoid()} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
