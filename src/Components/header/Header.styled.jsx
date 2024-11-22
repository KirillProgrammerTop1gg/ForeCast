import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 180px;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 40px;
`;

export const NavLink = styled.a`
    font-size: 16px;
    color: #333;
    text-decoration: none;
    &:hover {
        color: #0070f3;
    }
`;

export const SignUpButton = styled.button`
    background-color: #ffa500;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 30px;
    cursor: pointer;
    &:hover {
        background-color: #ff8c00;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
`;

export const Button = styled.button`
    background-color: #ffa500;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #ff8c00;
    }
`;