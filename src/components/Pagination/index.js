import React from 'react'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => {
  return (
    <S.PaginationWrapper>
      <S.Pagination to={prevPage}>
        {!isFirst && '←'}
      </S.Pagination>
      <S.PageNumbers>{currentPage} de {numPages}</S.PageNumbers>
      <S.Pagination id="next" to={nextPage}>
        {!isLast && '→'}
      </S.Pagination>
    </S.PaginationWrapper>
  );
}

export default Pagination;
