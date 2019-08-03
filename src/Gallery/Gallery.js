import React from "react";
import styled, {css} from "styled-components";
import UserGrid from "../Profile/UserGrid";
import {Link} from "react-router-dom";
import Posts from "../Posts";
import {Image} from "../App";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
  ${({cascade}) => cascade && css`
   
  `}
`

const LinkGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 20px;
    margin-bottom: 20px;
`

const TabLink = styled(Link)`
    text-decoration: none;
    color: #ccc;
    text-transform: uppercase;
    letter-spacing: 3px;
    ${({selected}) => selected && `color: black;`}
`

export function Gallery({match, location}) {
    const cascade = location.search === "?type=cascade";
    return (
      <div>
        <UserGrid />
        <LinkGrid>
            <TabLink selected={!cascade} to={`${match.url}`} >
                square
            </TabLink>
            <TabLink selected={cascade} to={{pathname: `${match.url}`, search:"?type=cascade"}} >
                cascade
            </TabLink>
        </LinkGrid>
        <PhotoGrid cascade={cascade}>
          {Posts.map(i => (
            <Link
              key={i.id}
              to={{
                pathname: `/img/${i.id}`,
                // this is the trick!
                state: { modal: true }
              }}
            >
              <Image index={i.id} />
            </Link>
          ))}
        </PhotoGrid>
      </div>
    );
  }