import React from "react";
import styled from "styled-components";
import {ProfileImage} from "./ProfileImage";

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";
    @media (max-width: 1000px) {
        grid-template-areas: "photo name"
                             "label label"
                             "description description";
        grid-template-columns: auto auto;
        grid-gap: 15px;
    }
`

export const MiniUserGrid = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`

const Photo = styled.div`
    grid-area: photo;
    justify-self: center;
`

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`

const Label = styled.div`
    grid-area: label;
    @media (max-width: 1000px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
    @media (max-width: 1000px) {
        padding-left: 30px;
        padding-right: 30px;
    }
   
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