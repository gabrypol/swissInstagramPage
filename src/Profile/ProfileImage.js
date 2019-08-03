import styled, {css} from 'styled-components'

export const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    background: no-repeat center/100% url(/img/swissFlag.jpeg);
    border-radius: 50%;
    margin-right: 40px;
    ${({mini}) => mini && css`
        width: 50px;
        height: 50px;
        margin: 5px;
    `}
`