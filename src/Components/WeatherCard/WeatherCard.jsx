import styled from "styled-components";
import del from "../../imgs/del.png";
import fav from "../../imgs/fav.png";
import update from "../../imgs/update.png";

const Card = styled.li`
    width: 320px;
    height: 430px;
    border-radius: 20px;
    background: #E8E8E8;
    padding: 15px 20px 20px;
    font-family: Montserrat;
    color: #000;
    font-weight: 500;
    @media (max-width: 1199px){
        width: 262px;
        padding: 12px 17px 17px 16px;
        height: 352px;
    }
    @media (max-width: 767px){
        width: 293px;
        height: 392px;   
        padding: 15px 15px 20px;
    }
    &>ul:nth-child(1){
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 1199px){
            padding: 0 8px;
        }
        @media (max-width: 767px){
            padding: 0;   
        }
    }
    &>ul:nth-child(3){
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        @media (max-width: 1199px){
            padding: 0 10px;
            margin-top: 8px;
        }
        @media (max-width: 767px){
            padding: 0 26px 0 27px;
            margin-top: 11px;
        }
    }
    &>ul:nth-child(7){
        display: flex;
        gap: 16px;
        margin-top: 38px;
        @media (max-width: 1199px){
            gap: 14px;
            margin-top: 34px;
        }
        @media (max-width: 767px){
            margin-top: 44px;
            padding: 0 17px;
        }
    }
`;
const Place = styled.p`
    font-size: 14px;
    @media (max-width: 1199px){
        font-size: 12px;
    }
`;
const UpdateTime = styled.h3`
    font-size: 24px;
    margin: 15px auto 0;
    width: max-content;
    text-align: center;
    font-weight: 500;
    @media (max-width: 1199px){
        margin: 11px auto 0;
        font-size: 20px;
    }
    @media (max-width: 767px){
        margin: 25px auto 0;
    }
`;
const AdditionalBut = styled.button`
    padding: 8px 18px;
    border-radius: 10px;
    background: #FFB36C;
    font-size: 10px;
    border: 0;
    cursor: pointer;
    @media (max-width: 1199px){
        font-size: 9px;
        padding: 6px 16px;
        border-radius: 5px;
    }
`;
const Date = styled.ul`
    margin-top: 15px;
    font-size: 14px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17px;
    @media (max-width: 1199px){
        height: 15px;
        font-size: 12px;
        margin-top: 12px;
    }
    &>li>div{
        width: 1px;
        height: 17px;
        background: #000;
        @media (max-width: 1199px){
            height: 15px;
        }
    }
    &>li:nth-child(1){
        position: absolute;
        right: calc(50% + 13px);
    }
    &>li:nth-child(2){
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    &>li:nth-child(3){
        position: absolute;
        left: calc(50% + 13px);
    }
`;
const WeatherIcon = styled.img`
    margin: 22px auto 0;
    width: 120px;
    display: block;
    height: 120px;
    @media (max-width: 1199px){
        margin: 27px auto 0;
        width: 76px;
        height: 76px;
    }
    @media (max-width: 767px){
        width: 83px;
        height: 83px;
        margin: 24px auto 0;
    }
`;
const Temp = styled.h2`
    font-size: 32px;
    margin-top: 15px;
    text-align: center;
    font-weight: 500;
    @media (max-width: 1199px){
        margin-top: 25px;
        font-size: 24px;
    }
`;
const ActionBut = styled.button`
    width: 30px;
    height: 30px;
    &>img{
        width: 100%;
        height: 100%;
        display: block;
    }
    border: 0;
    background-color: transparent;
    cursor: pointer;
    @media (max-width: 1199px){
        width: 24px;
        height: 24px;
    }
`;
const Morebut = styled.button`
    padding: 8px 25px;
    border-radius: 10px;
    background: #FFB36C;
    font-size: 10px;
    margin: 0 21px 0 22px;
    border: 0;
    cursor: pointer;
    @media (max-width: 1199px){
        font-size: 9px;
        width: 81px;
        padding: 6px 19px;
        margin: 0 16px 0 18px;
        border-radius: 5px;
    }
    @media (max-width: 767px){
        padding: 8px 20px;
        width: 84px;
    }
`;

export default ({ data }) => 
<Card>
    <ul>
        <li><Place>Prague</Place></li>
        <li><Place>Czech Republic</Place></li>
    </ul>
    <UpdateTime>14:00</UpdateTime>
    <ul>
        <li><AdditionalBut>Hourly forecast</AdditionalBut></li>
        <li><AdditionalBut>Weekly forecast</AdditionalBut></li>
    </ul>
    <Date>
        <li><p>13.10.2023</p></li>
        <li><div></div></li>
        <li><p>Friday</p></li>
    </Date>
    <WeatherIcon />
    <Temp>22℃</Temp>
    <ul>
        <li><ActionBut><img src={update} /></ActionBut></li>
        <li><ActionBut><img src={fav} /></ActionBut></li>
        <li><Morebut>See more</Morebut></li>
        <li><ActionBut><img src={del} /></ActionBut></li>
    </ul>
</Card>