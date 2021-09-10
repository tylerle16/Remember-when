import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: #101552;
`


export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    color: #fff;
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    &:hover {
        color: #01bf71;
        transition: 0.3 ease-out;
    }
`