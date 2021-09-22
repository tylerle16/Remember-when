import React from 'react';
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { actionLoggedOut } from '../../redux/actions/users';



import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';




const Navbar = ({ toggle }) => {
    const dispatch = useDispatch()
    const { user, checked } = useSelector(state => state.user) 

    
    const handleSignOut = () => {
        fetch('/api/v1/users/logout')
            .then(res => res.json())
            .then(data => {
                dispatch(actionLoggedOut())
            })
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/home'>Remember When</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/'>Learn More</NavLinks>
                    </NavItem>
                    {!user && (
                        <NavItem>
                            <NavLinks to='/register'>Sign Up</NavLinks>
                        </NavItem>
                    )}
                </NavMenu>
                {user ? (
                    <NavBtn onClick="handleSignOut">
                        <NavBtnLink>Sign Out</NavBtnLink>
                    </NavBtn>
                ) : (
                    <NavBtn>
                        <NavBtnLink to='/login'>Sign In</NavBtnLink>
                    </NavBtn>
                )}
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;