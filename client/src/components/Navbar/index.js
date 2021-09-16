import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import Landing from '../pages/landing';
import Homepage from '../pages/Homepage';



const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo as={Link} to='/'>Remember When</NavLogo>
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