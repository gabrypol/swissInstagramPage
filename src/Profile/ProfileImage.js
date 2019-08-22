import styled, { css } from "styled-components";

export const ProfileImage = styled.div`
  width: 160px;
  height: 160px;
  background: no-repeat center/100% url(img/swissFlag.jpeg);
  border-radius: 50%;
  margin-right: 40px;
  align-self: center;
  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
    margin: 0px;
  }
  ${({ mini }) =>
    mini &&
    css`
      width: 40px;
      height: 40px;
      margin: 5px;
      @media (max-width: 1000px) {
        width: 40px;
        height: 40px;
        margin: 0px;
      }
    `}
`;
