import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';


const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Remember When</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} to='/api/v1/users/register'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;