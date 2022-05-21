import React from 'react';
import { nanoid } from 'nanoid';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categiries = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categiries.map((items, index) => (
          <li
            key={nanoid()}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}>
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};
