import React from 'react';
import { FaBars } from 'react-icons/fa'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';




const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/home'>Remember When</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/'>Learn More</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  to='/register'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink  to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;