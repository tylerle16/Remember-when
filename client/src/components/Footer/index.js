import React from 'react'
import { Link } from 'react-router-dom'
import {FooterContainer, FooterWrap,FooterLinksWrapper, FooterLinksContainer, FooterLinkTitle, FooterLink, FooterLinksItems} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle> About </FooterLinkTitle>
                            <FooterLink to='/about'> About us </FooterLink>
                            <FooterLink to='/about'> Terms and conditions </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> User </FooterLinkTitle>
                            <FooterLink as={Link} to='/api/v1/users/register'> Sign up </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer