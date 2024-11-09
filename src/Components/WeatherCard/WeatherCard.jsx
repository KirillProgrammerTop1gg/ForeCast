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
`;
const Place = styled.p`
    font-size: 14px;
`;
const UpdateTime = styled.h3`
    font-size: 24px;
`;
const WeatherIcon = styled.img``;
const ForeCastBut = styled.button`
    padding: 8px 18px;
    border-radius: 10px;
    background: #FFB36C;
    font-size: 10px;
    border: 0;
`;
const MoreBut = styled.button`
    font-size: 10px;
    border-radius: 10px;
    background: #FFB36C;
    padding: 8px 25px;
    border: 0;
`;
const ActionBut = styled.button``;
const Temp = styled.h2``;
const Date = styled.p``;

export default () => 
<Card>
    <ul>
        <li><Place>Prague</Place></li>
        <li><Place>Czech Republic</Place></li>
    </ul>
    <UpdateTime>14:00</UpdateTime>
    <ul>
        <li><ForeCastBut>Hourly forecast</ForeCastBut></li>
        <li><ForeCastBut>Weekly forecast</ForeCastBut></li>
    </ul>
    <WeatherIcon />
    <Temp>22*C</Temp>
    <ul>
        <li><ActionBut><img src={update} /></ActionBut></li>
        <li><ActionBut><img src={fav} /></ActionBut></li>
        <li><MoreBut>See more</MoreBut></li>
        <li><ActionBut><img src={del} /></ActionBut></li>
    </ul>
</Card>