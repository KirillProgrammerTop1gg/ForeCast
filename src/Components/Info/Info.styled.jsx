import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 80px auto 0;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  text-align: left;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  width: 1140px;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease;
`;

export const Image = styled.img`
  width: 270px;
  height: 208px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-bottom: 20px
`;

export const Description = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 19.5px;
text-align: left;
text-decoration-skip-ink: none;
`;

export const Button = styled.button`
  margin-top: 40px;
  color: #000000;
  background-color: #ff9f43;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 138px;
  height: 40px;
  padding: 10px 30px 10px 30px;
  gap: 10px;
  border-radius: 10px;
  opacity: 0px;
  background: #FFB36C;
`;