import styled from "styled-components";
import del from "../../imgs/del.png";
import fav from "../../imgs/fav.png";
import favUsed from "../../imgs/favUsed.png";
import update from "../../imgs/update.png";
import React, {useState, useEffect} from "react";

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
    transition: all .3s;
    &:hover{
        transform: scale(1.1);
        transition: all .2s;
    }
    &:active{
        transform: scale(0.9);
        transition: all .2s;
    }
`;
const DateWeatherUpdate = styled.ul`
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
    transition: all .3s;
    &:hover{
        transform: scale(1.1);
        transition: all .2s;
    }
    &:active{
        transform: scale(0.9);
        transition: all .2s;
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
    transition: all .3s;
    &:hover{
        transform: scale(1.1);
        transition: all .2s;
    }
    &:active{
        transform: scale(0.9);
        transition: all .2s;
    }
`;

export default ({ id, data, updateFunc, delFunc, moreFunc, favFunc, isFav }) => {
    const WeatherDate = new Date(data.current.last_updated_epoch*1000);
    return (<Card key={id}>
        <ul>
            <li key={1}><Place>{data.location.name}</Place></li>
            <li key={2}><Place>{data.location.country}</Place></li>
        </ul>
        <UpdateTime>{WeatherDate.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}</UpdateTime>
        <ul>
            <li key={3}><AdditionalBut onClick={() => moreFunc(data.location.name, 2, isFav)}>Hourly forecast</AdditionalBut></li>
            <li key={4}><AdditionalBut onClick={() => moreFunc(data.location.name, 3, isFav)}>Weekly forecast</AdditionalBut></li>
        </ul>
        <DateWeatherUpdate>
            <li key={5}><p>{WeatherDate.toLocaleDateString('ru-RU')}</p></li>
            <li key={6}><div></div></li>
            <li key={7}><p>{WeatherDate.toLocaleString('en', {weekday: 'long'})}</p></li>
        </DateWeatherUpdate>
        <WeatherIcon src={data.current.condition.icon.replace('64x64', '128x128')} alt={data.current.condition.text}/>
        <Temp>{data.current.temp_c}℃</Temp>
        <ul>
            <li key={8}><ActionBut onClick={() => updateFunc(data.location.name)}><img src={update} /></ActionBut></li>
            <li key={9}><ActionBut onClick={() => favFunc(data)}><img src={isFav ? favUsed : fav} /></ActionBut></li>
            <li key={10}><Morebut onClick={() => moreFunc(data.location.name, 1, isFav)}>See more</Morebut></li>
            <li key={11}><ActionBut onClick={() => delFunc(data.location.name)}><img src={del} /></ActionBut></li>
        </ul>
    </Card>)
}