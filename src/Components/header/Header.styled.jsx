import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    font-family: "Montserrat Alternates";
    font-weight: 500;
    justify-content: space-between;
    align-items: center;
    padding: 10px 180px;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    position: relative;

    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`;

export const Logo = styled.img`
    height: 40px;
    margin-left: 20px;

    @media (max-width: 768px) {
        height: 35px;
        margin-left: 10px;
    }
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 40px;

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: #f6f6f6;
        padding: 20px 0;
        z-index: 1000;
        border-top: 1px solid #ddd;
    }
`;

export const NavLink = styled.a`
    font-size: 18px;
    color: #333;
    text-decoration: none;
    padding: 10px 20px;
    display: block;

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
    cursor: pointer;

    &:hover {
        background-color: #ff8c00;
    }

    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;

    span {
        width: 25px;
        height: 3px;
        background-color: #333;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const MobileNavActive = styled(NavLinks)`
    display: flex;
`;

export const UserAvatar = styled.div`
    background-color: #e0e0e0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
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
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

export const ModalTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
`;

export const SignUpModalButton = styled.button`
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

export const SignInText = styled.p`
    font-size: 14px;
    margin-top: 10px;
    text-align: center;

    a {
        color: #0070f3;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;