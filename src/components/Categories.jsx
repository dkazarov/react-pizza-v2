import React from 'react';

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
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}>
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};
