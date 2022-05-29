import React from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

export const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onFocusAfterClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  // eslint-disable-next-line
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground='new 0 0 50 50'
        height='50px'
        id='Layer_1'
        version='1.1'
        viewBox='0 0 50 50'
        width='50px'
        xmlns='http://www.w3.org/2000/svg'>
        <rect fill='none' height='50' width='50' />
        <circle
          cx='21'
          cy='20'
          fill='none'
          r='16'
          stroke='#000000'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='2'
        />
        <line
          fill='none'
          stroke='#000000'
          strokeMiterlimit='10'
          strokeWidth='4'
          x1='32.229'
          x2='45.5'
          y1='32.229'
          y2='45.5'
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder='search'
      />
      {value && (
        <svg
          onClick={() => onFocusAfterClear('')}
          className={styles.clearIcon}
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
        </svg>
      )}
    </div>
  );
};
