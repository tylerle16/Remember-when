import styled from 'styled-components'


export const AboutContainer = styled.div`
    color: #fff;
    height: 700px;

    background: ${({lightBg}) => lightBg ? '#d9d9d9' : '#d9d9d9'};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    padding-left: 5em;
    padding-top: 2em;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;

`

export const Name = styled.h1`
    color: black;
    font-size: 27px;
`
export const Github = styled.a `
    text-decoration: none;
    color: black;

    a:focus, a:hover, a:visited, a:link, a:active {
        text-decoration: none;
    }
`