import styled from 'styled-components'
import { Link } from 'gatsby'

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export const Pagination = styled(Link)`
  font-size: 3rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--texts);
`;

export const PageNumbers = styled.p`
  font-size: 1.5rem;
  margin: .3rem .75rem 0;
  color: var(--texts);
`;
