import React from 'react';
import s from './Pagination.module.css';
import PaginationButton from './PaginationButton/PaginationButton';

const Pagination = (props) => {
  const { currentPage, pageTotalCount, sliceValue = 10 } = props;

  const handleClick = (pageNumber) => {
    props.onChangePage(pageNumber);
  };

  const getPageNumbers = (current, total, slice) => {
    const pageNumbers = [];
    const halfSlice = Math.ceil(slice / 2);

    let leftLimit = current - halfSlice > 1 ? current - halfSlice : 1;
    let rightLimit = current + halfSlice < total ? current + halfSlice : total;

    if (rightLimit - leftLimit < slice) {
      if (leftLimit === 1) rightLimit += slice - (rightLimit - leftLimit);
      else leftLimit -= slice - (rightLimit - leftLimit);
    }

    for (let i = leftLimit; i < current; i += 1) pageNumbers.push(i);
    pageNumbers.push(current);
    for (let i = current + 1; i <= rightLimit; i += 1) pageNumbers.push(i);

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers(currentPage, pageTotalCount, sliceValue);

  const LeftEllipsis = () => (
    <>
      <PaginationButton
        value={1}
        onClick={() => handleClick(0)}
        isSelected={1 === currentPage}
      />
      <span>...</span>
    </>
  );
  const RightEllipsis = () => (
    <>
      <span>...</span>
      <PaginationButton
        value={pageTotalCount}
        onClick={() => handleClick(pageTotalCount)}
        isSelected={pageTotalCount === currentPage}
      />
    </>
  );

  return (
    <div className={s.pagination}>
      <button className={s.pagination__arrow}>&#8592;</button>
      {pageNumbers[0] > 1 && <LeftEllipsis />}
      {pageNumbers.map((i) => (
        <PaginationButton
          key={i}
          value={i}
          onClick={() => handleClick(i)}
          isSelected={i === currentPage}
        />
      ))}
      {pageNumbers[pageNumbers.length - 1] < pageTotalCount - 1 && (
        <RightEllipsis />
      )}
      <button className="pagination__arrow pagination__arrow--right">
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;
