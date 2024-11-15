import React, { useState, useEffect } from 'react';
import {
    HeaderContainer,
    NavLinks,
    NavLink,
    SignUpButton
} from './Header.styled';
import LoginModal from './LoginModal';
import header1 from "../image/header1.png";
import header2 from "../image/header2.png";

const Header = () => {
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const handleLogin = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsModalOpen(false);
    };

    return (
        <>
            <HeaderContainer>
                <img src={header1} alt="Logo" />

                <NavLinks>
                    <NavLink href="#">Who we are</NavLink>
                    <NavLink href="#">Contacts</NavLink>
                    <NavLink href="#">Menu</NavLink>
                </NavLinks>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '15px' }}>{user.name}</span>
                            <SignUpButton onClick={handleLogout}>
                                Log Out
                            </SignUpButton>
                        </div>
                    ) : (
                        <SignUpButton onClick={() => setIsModalOpen(true)}>
                            Sign Up
                        </SignUpButton>
                    )}
                    <img src={header2} alt="User Icon" />
                </div>
            </HeaderContainer>

            {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} onLogin={handleLogin} />}
        </>
    );
};

export default Header;