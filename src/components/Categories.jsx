import React from 'react';
import { nanoid } from 'nanoid';

export const Categories = ({ categoryId, onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoriesName, index) => (
          <li
            key={nanoid()}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? 'active' : ''}>
            {categoriesName}
          </li>
        ))}
      </ul>
    </div>
  );
};
