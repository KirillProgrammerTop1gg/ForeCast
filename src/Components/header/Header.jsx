import React, { useState } from 'react';
import {
    HeaderContainer,
    Logo,
    NavLinks,
    NavLink,
    SignUpButton,
    HamburgerMenu,
    MobileNavActive,
    UserAvatar,
    ModalOverlay,
    ModalContent,
    CloseButton,
    ModalTitle,
    Form,
    Input,
    SignUpModalButton,
    SignInText,
} from './Header.styled';
import header1 from "../../imgs/header1.png"
import header2 from "../../imgs/header2.png"

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user') || '');

    const handleSignUp = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        localStorage.setItem('user', username);
        setUser(username);
        setIsModalOpen(false);
    };

    return (
        <HeaderContainer>
            <Logo src={header1} alt="24/7 Forecast Logo" />
            <HamburgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerMenu>

            <NavLinks as={isMobileMenuOpen ? MobileNavActive : 'nav'}>
                <NavLink href="#">Who we are</NavLink>
                <NavLink href="#">Contacts</NavLink>
                <NavLink href="#">Menu</NavLink>
            </NavLinks>
            <NavLinks>
                {user ? (
                    <UserAvatar>{user}</UserAvatar>
                ) : (
                    <SignUpButton onClick={() => setIsModalOpen(true)}>Sign Up</SignUpButton>
                )}
                <UserAvatar><img src={header2} /></UserAvatar>
            </NavLinks>
            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
                        <ModalTitle>Sign Up</ModalTitle>
                        <Form onSubmit={handleSignUp}>
                            <Input name="username" placeholder="Username" required />
                            <Input type="email" name="email" placeholder="E-Mail" required />
                            <Input type="password" name="password" placeholder="Password" required />
                            <SignUpModalButton type="submit">Sign Up</SignUpModalButton>
                        </Form>
                        <SignInText>
                            Already have an account? <a href="#login">Log in</a>
                        </SignInText>
                    </ModalContent>
                </ModalOverlay>
            )}
        </HeaderContainer>
    );
};

export default Header;