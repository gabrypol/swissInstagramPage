import React from "react";
import styled, { css } from "styled-components";
import UserGrid from "../Profile/UserGrid";
import { Link } from "react-router-dom";
import Posts from "../Posts";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  grid-gap: 20px;
  grid-auto-rows: 305px;
  margin-top: 20px;
  padding-bottom: 30px;
  ${({ cascade }) =>
    cascade &&
    css`
      grid-auto-rows: 200px;
      grid-gap: 5px;
    `}
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-gap: 20px;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ selected }) => selected && `color: black;`}
`;

const ImageLink = styled(Link)`
  background: no-repeat center url(img/${({ index }) => index}.jpeg);
  background-size: cover;
  :hover {
    opacity: 0.7;
  }
  ${({ cascade }) =>
    cascade &&
    css`
      &:nth-of-type(2n + 1) {
        grid-row-start: span 2;
      }
    `}
`;

export function Gallery({ match, location }) {
  const cascade = location.search === "?type=cascade";
  return (
    <div>
      <UserGrid />
      <LinkGrid>
        <TabLink selected={!cascade} to={`${match.url}`}>
          square
        </TabLink>
        <TabLink
          selected={cascade}
          to={{ pathname: `${match.url}`, search: "?type=cascade" }}
        >
          cascade
        </TabLink>
      </LinkGrid>
      <PhotoGrid cascade={cascade}>
        {Posts.map(i => (
          <ImageLink
            cascade={cascade}
            key={i.id}
            index={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // this is the trick!
              state: { modal: true }
            }}
          />
        ))}
      </PhotoGrid>
    </div>
  );
}
