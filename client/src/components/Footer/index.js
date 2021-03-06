import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterElements'


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
                            <FooterLink to='/register'> Sign up </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                        </FooterLinksItems>
                        <FooterLinksItems>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer