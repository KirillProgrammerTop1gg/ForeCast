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
    @media (max-width: 1199px){
        padding: 40px 0;
    }
    @media (max-width: 767px){
        padding: 50px 0 100px;
        height: 345px;
    }
`;
const TextContainer = styled.div`
    display: flex;
    gap: 52px;
    margin: 80px auto;
    width: 794px;
    @media (max-width: 1199px){
        width: 412px;
        gap: 34px;
        margin: 40px auto 64px;
    }
    @media (max-width: 767px){
        margin: 35px auto 0;
        width: 161px;
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-left: 25px;
        transform: translateX(-50%);
        left: 50%;
    }
`;
const Title = styled.h1`
    color: #FFF;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
    @media (max-width: 1199px){
        font-size: 20px;
    }
    @media (max-width: 767px){
        font-size: 14px;
        height: 17px;
    }
`;
const Description = styled.h3`
    color: #FFF;
    font-size: 24px;
    width: 345px;
    font-weight: 500;
    text-align: right;
    @media (max-width: 1199px){
        font-size: 14px;
        width: 172px;
    }
    @media (max-width: 767px){
        font-size: 10px;
        width: 136px;
        text-align: left;
    }
`;
const Date = styled.h3`
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 1199px){
        font-size: 14px;
    }
    @media (max-width: 767px){
        font-size: 10px;
    }
`;
const Line = styled.div`
    width: 3px;
    height: 144px;
    background: #FFF;
    @media (max-width: 1199px){
        height: 110px;
    }
    @media (max-width: 767px){
        position: absolute;
        left: 0;
        width: 2px;
        height: 80px;
    }
`;
const SearchContainer = styled.div`
    width: 625px;
    height: 42px;
    border-radius: 10px;
    position: relative;
    margin: 0 auto;
    @media (max-width: 1199px){
        width: 402px;
        height: 27px;
    }
    @media (max-width: 767px){
        width: 174px;
        height: 15px;
        margin-top: 163px;
    }
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
    @media (max-width: 1199px){
        font-size: 10px;
        width: 402px;
        height: 27px;
        padding: 7.5px 18.65px;
    }
    @media (max-width: 767px){
        width: 174px;
        height: 15px;
        font-size: 6px;
        padding: 3.9px 10px;
        position: absolute;
    }
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
    @media (max-width: 1199px){
        width: 29px;
        height: 27px;
    }
    @media (max-width: 767px){
        width: 16px;
        height: 15px;
    }
    &>img{
        display: block;
        margin: 0 auto;
        width: 25px;
        height: 25px;
        @media (max-width: 1199px){
            width: 16px;
            height: 16px;
        }
        @media (max-width: 767px){
            width: 9px;
            height: 9px;
        }
    }
`;

export default ({ changeSearch, searchWeather }) => {
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
                <Search placeholder="Search location..." onChange={(e) => changeSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? (e.target.value = '', searchWeather()) : null} />
                <SearchBut onClick={(e) => (document.querySelector('input[placeholder="Search location..."]').value = '', searchWeather())}>
                    <img src={searchImg} alt="searchImg"/>
                </SearchBut>
            </SearchContainer>
        </Hero>
    </>
}