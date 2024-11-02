import styled from "styled-components";
import heroBg from "../../imgs/heroBg.png";
import searchImg from "../../imgs/search.png";

const Hero = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${heroBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 595px;
    padding: 100px 0;
    font-family: Montserrat;
`;
const TextContainer = styled.div`
    display: flex;
    gap: 52px;
    margin: 80px auto;
    width: 794px;
`;
const Title = styled.h1`
    color: #FFF;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
`;
const Description = styled.h3`
    color: #FFF;
    font-size: 24px;
    width: 345px;
    font-weight: 500;
`;
const Date = styled.h3`
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
`;
const Line = styled.div`
    width: 3px;
    height: 144px;
    background: #FFF;
`;
const SearchContainer = styled.div`
    width: 625px;
    height: 42px;
    border-radius: 10px;
    position: relative;
    margin: 0 auto;
`;
const Search = styled.input`
    border: 0;
    width: 625px;
    height: 42px;
    font-family: Montserrat;
    padding: 12px 29px;
    background: #D9D9D9;
    border-radius: 10px;
    color: #878787;
    font-size: 14px;
    font-weight: 500;
`;
const SearchBut = styled.button`
    width: 45px;
    height: 42px;
    border-radius: 0px 10px 10px 0px;
    border: 0;
    border-left: 2px solid #000;
    background: #FFB36C;
    position: absolute;
    right: 0;
    cursor: pointer;
    &>img{
        display: block;
        margin: 0 auto;
        width: 25px;
        height: 25px;
    }
`;

export default () => {
    const getDay = (day) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = day % 100;
        return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    }
    return <>
        <Hero>
            <Title>Weather dashboard</Title>
            <TextContainer>
                <Description>Create your personal list of favorite cities and always be aware of the weather.</Description>
                <Line />
                <Date>
                    {new window.Date().toLocaleString('en', {month: 'long'})} {new window.Date().getFullYear()} 
                    <br></br>
                    {new window.Date().toLocaleString('en', {weekday: 'long'})}, {getDay(new window.Date().getDate())} 
                </Date>
            </TextContainer>
            <SearchContainer>
                <Search placeholder="Search location..." />
                <SearchBut>
                    <img src={searchImg} alt="searchImg"/>
                </SearchBut>
            </SearchContainer>
        </Hero>
    </>
}