import React from 'react';
import { HeaderContainer, NavLinks, NavLink, SignUpButton, } from './Header.styled';
import header1 from "../../imgs/header1.png"
import header2 from "../../imgs/header2.png"

const Header = () => {
    return (
        <HeaderContainer>
            <img src={header1} alt="" />

            <NavLinks>
                <NavLink>Who we are</NavLink>
                <NavLink>Contacts</NavLink>
                <NavLink>Menu</NavLink>
            </NavLinks>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SignUpButton>Sign Up</SignUpButton>
                <img src={header2} alt="" />
            </div>
        </HeaderContainer>
    );
};

export default Header;