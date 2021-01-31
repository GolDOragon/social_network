import React from 'react';
import css from './Paginator.module.css';
import PaginatorButton from './PaginatorButton/PaginatorButton';

const Paginator = ({
  totalItemsCount,
  currentPage,
  itemsPerPage,
  onPageChanged,
  sliceSize = 10,
}) => {
  const totalPageCount = getTotalPageCount(totalItemsCount, itemsPerPage);
  const slice = getSlice(totalPageCount, currentPage, sliceSize);

  return (
    <div className={css.paginator}>
      {slice[0] > 1 && (
        <>
          <PaginatorButton
            onSelectPage={() => onPageChanged(currentPage - 1)}
            text="Prev"
          />
          <PaginatorButton onSelectPage={() => onPageChanged(1)} text={1} />
          <span>...</span>
        </>
      )}
      {slice.map((item) => (
        <PaginatorButton
          key={item}
          onSelectPage={() => onPageChanged(item)}
          text={item}
          disabled={item === currentPage}
        />
      ))}
      {slice[slice.length - 1] < totalPageCount && (
        <>
          <span>...</span>
          <PaginatorButton
            onSelectPage={() => onPageChanged(totalPageCount)}
            text={totalPageCount}
          />
          <PaginatorButton
            onSelectPage={() => onPageChanged(currentPage + 1)}
            text="Next"
          />
        </>
      )}
    </div>
  );
};

export default Paginator;

export function getSlice(totalPageCount, currentPage, sliceSize) {
  const getFullArray = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i += 1) {
      arr.push(i);
    }
    return arr;
  };
  if (+totalPageCount < 1 || +currentPage < 1 || +sliceSize < 1) return [];

  if (totalPageCount < sliceSize) {
    return getFullArray(1, totalPageCount);
  }

  let leftPart = Math.floor(sliceSize / 2);
  let rightPart = sliceSize - leftPart - 1;

  let startPage = currentPage - leftPart;
  let finalPage = currentPage + rightPart;

  if (finalPage > totalPageCount) {
    startPage -= finalPage - totalPageCount;
    finalPage = totalPageCount;
  }
  if (startPage < 1) {
    finalPage += 1 - startPage;
    startPage = 1;
  }

  return getFullArray(startPage, finalPage);
}

export function getTotalPageCount(totalItemsCount, itemsPerPage) {
  if (totalItemsCount === 0 || itemsPerPage === 0) return null;

  return Math.ceil(totalItemsCount / itemsPerPage);
}
