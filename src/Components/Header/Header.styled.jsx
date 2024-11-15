import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 180px;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-family: "Montserrat Alternates";
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Cursive', sans-serif;
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
  color: #000;
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

export const UserIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #4a5a78;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; 
`;