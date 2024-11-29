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
    UserName
} from './Header.styled';
// import LoginModal from './LoginModal';
import header1 from "../../imgs/header1.png";
import header2 from "../../imgs/header2.png";

const Header = ({ checkLogin }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('currentUser') || '');
    if(user) checkLogin(true);
    const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];

    const handleSignUp = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = getUsers();
        if (users.some((u) => u.email === email)) {
            alert('User with this email already exists.');
            return;
        }

        const newUser = { username, email, password };
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        localStorage.setItem('currentUser', username);
        setUser(username);
        checkLogin(true);
        setIsSignUpModalOpen(false);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = getUsers();
        const existingUser = users.find((u) => u.email === email && u.password === password);

        if (existingUser) {
            localStorage.setItem('currentUser', existingUser.username);
            setUser(existingUser.username);
            checkLogin(true);
            setIsLogInModalOpen(false);
        } else {
            checkLogin(false);
            alert('Invalid email or password. Please try again.');
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('currentUser');
        checkLogin(false);
        setUser('');
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
                    <>
                        <SignUpButton onClick={handleLogOut}>Log Out</SignUpButton>
                        <UserName>{user}</UserName>
                    </>
                ) : (
                    <>
                        <SignUpButton onClick={() => setIsSignUpModalOpen(true)}>Sign Up</SignUpButton>
                        <UserAvatar>
                            <img src={header2} alt="User avatar" />
                        </UserAvatar>
                    </>
                )}
            </NavLinks>
            {isSignUpModalOpen && (
                <ModalOverlay onClick={() => setIsSignUpModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsSignUpModalOpen(false)}>×</CloseButton>
                        <ModalTitle>Sign Up</ModalTitle>
                        <Form onSubmit={handleSignUp}>
                            <Input name="username" placeholder="Username" required />
                            <Input type="email" name="email" placeholder="E-Mail" required />
                            <Input type="password" name="password" placeholder="Password" required />
                            <SignUpModalButton type="submit">Sign Up</SignUpModalButton>
                        </Form>
                        <SignInText>
                            Already have an account?{' '}
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                setIsSignUpModalOpen(false);
                                setIsLogInModalOpen(true);
                            }}>
                                Log in
                            </a>
                        </SignInText>
                    </ModalContent>
                </ModalOverlay>
            )}
            {isLogInModalOpen && (
                <ModalOverlay onClick={() => setIsLogInModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsLogInModalOpen(false)}>×</CloseButton>
                        <ModalTitle>Log In</ModalTitle>
                        <Form onSubmit={handleSignIn}>
                            <Input type="email" name="email" placeholder="E-Mail" required />
                            <Input type="password" name="password" placeholder="Password" required />
                            <SignUpModalButton type="submit">Log In</SignUpModalButton>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            )}
        </HeaderContainer>
    );
};

export default Header;