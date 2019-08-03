import React from "react";
import styled from "styled-components";
import {ProfileImage} from "./ProfileImage";

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";
`

export const MiniUserGrid = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`

const Photo = styled.div`
    grid-area: photo;
`

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
`

const Label = styled.div`
    grid-area: label;
`

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
`

export default function() {
    return <UserGridStyled> 
        <Photo><ProfileImage /></Photo>
        <Name>switzerland</Name>
            <Label>
                <strong>21</strong> posts<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <strong>5.7m</strong> followers<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <strong>0</strong> following
            </Label>
        <Description>Switzerland is a small country, located in the very heart of Europe, and it is a vibrant destination made of stunning cities and landscapes.</Description>
    </UserGridStyled>
}