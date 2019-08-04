import React from "react";
import Posts from "../Posts";
import {Image} from "../App"
import styled, {createGlobalStyle} from "styled-components";
import {PostGrid, InfoGrid} from "./PostGrid";
import {MiniUserGrid} from "../Profile/UserGrid";
import {ProfileImage} from "../Profile/ProfileImage";

const OverFlowHidden = createGlobalStyle`
    body {
        overflow: hidden;
        @media (max-width: 1000px) {
          overflow: scroll;
        }
    }
`

const ModalStyled = styled.div`
    position: absolute;
    background: #fff;
    top: ${({top}) => top}px;
    left: 10%;
    right: 10%;
    @media (max-width: 1000px) {
      left: 0;
      right: 0;
      bottom: 10%;
    }
`

export function Modal({ match, history }) {
    let image = Posts[parseInt(match.params.id, 10) - 1];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: '5000px',
          background: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <ModalStyled
            top={window.scrollY + (window.innerHeight * 0.05) }
        >
            <OverFlowHidden />
            <PostGrid>
                <Image index={image.id} />
                <InfoGrid>
                    <MiniUserGrid>
                        <ProfileImage mini />
                        <h3> switzerland </h3>
                    </MiniUserGrid>
                    <div> Comments </div>
                    <div><strong>589,453 likes</strong></div>
                </InfoGrid>
            </PostGrid>
        </ModalStyled>
      </div>
    );
}