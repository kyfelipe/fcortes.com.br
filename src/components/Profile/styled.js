import styled from "styled-components"
import Img from "gatsby-image"

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--highlight);
  padding: 2px;
`;

export const ProfileImage = styled(Img)`
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: -.25rem;
`;

export const Author = styled.p`
  color: var(--texts);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
`;

export const Date = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--texts);
`;
