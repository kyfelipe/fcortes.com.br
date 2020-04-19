import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 50vh;
  color: var(--texts);
`;

export const PostItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PostItemProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostItemProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #1B68BF;
  padding: 2px;
`;

export const PostItemProfilePhoto = styled(Img)`
  border-radius: 50%;
`;

export const PostItemProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .75rem;
`;

export const PostItemImage = styled.div`
  width: 500px;
  position: absolute;
  right: 2%;
`;

export const Image = styled(Img)`
  max-height: 800px;
  background-position: 50% 50%;
  background-size: cover;
`;

export const PostItemInfo = styled.div`
  
`;

export const PostItemTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 1.5rem 0;
  width: 82%;
`;

export const PostItemDate = styled.div`
  font-size: .95rem;
`;

export const PostItemProfileName = styled.div`
  font-weight: 700;
`;

export const PostItemDescription = styled.div`
  width: 82%;
`;
