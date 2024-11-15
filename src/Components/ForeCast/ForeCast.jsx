import styled from "styled-components"

const Forecast = styled.section`
    width: 1140px;
    height: 554px;
    border-radius: 20px;
    background: #E8E8E8;
    padding: 26px 78px 42px 76px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    margin: 80px auto 0;
    color: #000;
    @media (max-width: 1199px){
        width: 634px;
        height: 526px;
        border-radius: 15px;
        padding: 20px 35px 35px;
        font-size: 14px;
    }
    @media (max-width: 767px){
        width: 293px;
        height: 755px;
        padding: 18px 25px 35px;
        font-size: 10px;
    }
`;
const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    @media (max-width: 1199px){
        font-size: 12px;
        padding-left: 10px;
    }
    @media (max-width: 767px){
        font-size: 10px;
        padding-left: 18px;
    }
`;
const ForecastList = styled.ul`
    margin-top: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1199px){
        gap: 17px;
        margin-top: 17px;
    }
    @media (max-width: 767px){
        flex-direction: row;
        flex-wrap: wrap;
        gap: 35px 43px;
        margin-top: 25px;
    }
    &>li{
        width: 100%;
        border-radius: 10px;
        background: #D9D9D9;
        height: 47px;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 50px;
        @media (max-width: 1199px){
            height: 40px;
            padding: 0 15px;
        }
        @media (max-width: 767px){
            width: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 140px;
            padding: 10px 0 22px;
        }
    }
`;
const DateText = styled.p``;
const WeatherIcon = styled.img`
    width: 45px;
    height: 45px;
    display: block;
    position: absolute;
    left: 435px;
    @media (max-width: 1199px){
        width: 35px;
        height: 35px;
        left: 232px;
    }
    @media (max-width: 767px){
        width: 30px;
        height: 30px;
        position: static;
        margin-top: 20px;
    }
`;
const Temps = styled.p`
    position: absolute;
    left: 493px;
    @media (max-width: 1199px){
        left: 281px;
    }
    @media (max-width: 767px){
        position: static;
        margin-top: 7px;
    }
`;
const Weather = styled.p`
    margin-left: auto;
    @media (max-width: 767px){
        margin: 15px auto 0;
    }
`;

export default ({ data }) =>
<Forecast>
    <Title>8-day forecast</Title>
    <ForecastList>
        {data.forecast.forecastday.map(forecastDay => <li key={Math.floor(10000000 + Math.random() * 90000000)}>
            <DateText>{new Date(forecastDay.date_epoch*1000).toLocaleString('en', {weekday: 'long'}).slice(0,3)}, {new Date(forecastDay.date_epoch*1000).toLocaleString('en', {month: 'long'}).slice(0,3)} {forecastDay.date.slice(-2)}</DateText>
            <WeatherIcon src={forecastDay.day.condition.icon.replace('64x64', '128x128')} alt={forecastDay.day.condition.text} />
            <Temps>{forecastDay.day.maxtemp_c}/{forecastDay.day.mintemp_c}℃</Temps>
            <Weather>{forecastDay.day.condition.text}</Weather>
        </li>)}
    </ForecastList>
</Forecast>