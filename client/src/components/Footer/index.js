import React from 'react'

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
                            <FooterLink to='/signup'> Sign up </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer