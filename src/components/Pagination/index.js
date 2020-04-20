import React from 'react'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => {
  return (
    <S.PaginationWrapper>
      {!isFirst &&
      <S.Pagination to={prevPage}> {'<'} </S.Pagination>
      }

      <S.PageNumbers>{currentPage} de {numPages}</S.PageNumbers>

      {!isLast &&
      <S.Pagination to={nextPage}> {'>'} </S.Pagination>
      }
    </S.PaginationWrapper>
  );
}

export default Pagination;
