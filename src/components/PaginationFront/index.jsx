import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import styles from './Pagination.module.scss';

export const PaginationServer = ({ limitItemsOnPage, items, paginate }) => {
  const totalCountPages = [];

  for (let i = 1; i <= Math.ceil(items.length / limitItemsOnPage); i++) {
    totalCountPages.push(i);
  }

  return (
    <ul className={styles.root}>
      {totalCountPages.map((pages) => (
        <li key={nanoid()}>
          <Link to='#' onClick={() => paginate(pages)}>
            {pages}
          </Link>
        </li>
      ))}
    </ul>
  );
};
