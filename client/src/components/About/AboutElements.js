import styled from 'styled-components'

export const AboutContainer = styled.div`
    color: #fff;

    background: ${({lightBg}) => lightBg ? '#d9d9d9' : '#d9d9d9'};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 10 24px;
    justify-content: center;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
