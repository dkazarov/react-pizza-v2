import React from 'react';
import { nanoid } from 'nanoid';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { PaginationServer } from '../components/PaginationFront';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  // Frontend pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limitItemsOnPage] = React.useState(4);
  //
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  // Pagination Frontend
  const lastPage = currentPage * limitItemsOnPage;
  const firstPage = lastPage - limitItemsOnPage;
  const onCurrentPage = items.slice(firstPage, lastPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://628cabfca3fd714fd036dae9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((response) => response.json())
      .then((products) => {
        setItems(products);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const pizzas = onCurrentPage.map((obj) => <PizzaBlock key={nanoid()} {...obj} />);
  const skeletons = [...new Array(12)].map(() => <Skeleton key={nanoid()} />);

  return (
    <>
      <div className='container'>
        <div className='content__top'>
          <Categories categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)} />
          <Sort sortType={sortType} onClickSortType={(i) => setSortType(i)} />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      </div>
      <PaginationServer limitItemsOnPage={limitItemsOnPage} items={items} paginate={paginate} />
    </>
  );
};

export default Home;
