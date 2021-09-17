import styled from 'styled-components'



export const AboutContainer = styled.div`
    color: #fff;
    height: 700px;
    /* display: flex;
    flex-direction: row;
    align-content: center; */

    background: ${({lightBg}) => lightBg ? '#d9d9d9' : '#d9d9d9'};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`

    display: flex;
    flex-direction: row;
    align-content: center;
`

export const Name = styled.h1`
    color: black;
    font-size: 27px;
`