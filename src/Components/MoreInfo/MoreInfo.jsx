import styled from "styled-components";
import temp from "../../imgs/temp.png";
import humidity from "../../imgs/humidity.png";
import pressure from "../../imgs/pressure.png";
import windSpeed from "../../imgs/windSpeed.png";
import visiblity from "../../imgs/visiblity.png";

const MoreInfo = styled.ul`
    display: flex;
    width: 1140px;
    height: 554px;
    flex-wrap: wrap;
    gap: 58px 40px;
    margin: 0 auto;
    border-radius: 20px;
    background: #E8E8E8;
    padding: 40px 77px;
    @media (max-width: 1199px){
        width: 634px;
        height: 490px;
        border-radius: 15px;
        gap: 30px 21px;
        padding: 30px;
    }
    @media (max-width: 767px){
        width: 293px;
        height: 1205px;        
        padding: 35px 43px;
        gap: 35px;
    }
`;
const InfoCard = styled.li`
    width: 290px;
    height: 217px;
    border-radius: 10px;
    background: #D9D9D9;
    padding: 20px;
    @media (max-width: 1199px){
        width: 177px;
        height: 200px;
    }
    @media (max-width: 767px){
        width: 207px;
        height: 160px;
        padding: 15px;
    }
`;
const Title = styled.h3`
    font-family: Montserrat;
    color: #000;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 1199px){
        font-size: 12px;
    }
    @media (max-width: 767px){
        font-size: 10px;
    }
`;
const Val = styled.h2`
    font-family: Montserrat;
    color: #000;
    text-align: center;
    font-weight: 500;
    font-size: 32px;
    margin-top: 10px;
    @media (max-width: 1199px){
        font-size: 16px;
        margin-top: 8px;
    }
    @media (max-width: 767px){
        font-size: 14px;
    }
`;
const Empty = styled.div`
    width: 100%;
    height: 19px;
    @media (max-width: 1199px){
        height: 29px;
    }
    @media (max-width: 767px){
        height: 22px;
    }
`;
const Ico = styled.img`
    width: 85px;
    height: 85px;
    display: block;
    margin: 23px auto 0;
    @media (max-width: 1199px){
        width: 60px;
        height: 60px;
        margin: 37px auto 0;
    }
    @media (max-width: 767px){
        margin: 18px auto 0;
    }
`;

export default ({}) =>
<MoreInfo>
    <InfoCard>
        <Title>Feels like</Title>
        <Val>29.2℃</Val>
        <Ico src={temp} alt="temp"/>
    </InfoCard>
    <InfoCard>
        <Title>Min ℃</Title>
        <Val>27.9℃</Val>
        <Empty></Empty>
        <Title>Max ℃</Title>
        <Val>27.9℃</Val>
    </InfoCard>
    <InfoCard>
        <Title>Humidity</Title>
        <Val>59%</Val>
        <Ico src={humidity} alt="humidity"/>
    </InfoCard>
    <InfoCard>
        <Title>Pressure</Title>
        <Val>1007 Pa</Val>
        <Ico src={pressure} alt="pressure"/>
    </InfoCard>
    <InfoCard>
        <Title>Wind speed</Title>
        <Val>3.17 m/s</Val>
        <Ico src={windSpeed} alt="wind speed"/>
    </InfoCard>
    <InfoCard>
        <Title>Visibility</Title>
        <Val>Unlimited</Val>
        <Ico src={visiblity} alt="visiblity"/>
    </InfoCard>
</MoreInfo>