import styled from 'styled-components'

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 .5rem 0 0;
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: .5rem;
  text-decoration: none;
  color: var(--texts);
  cursor: pointer;
  
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
  
  a:link {
    text-decoration: inherit;
    color: inherit;
  }
`;
