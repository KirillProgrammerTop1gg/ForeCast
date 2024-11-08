import styled from "styled-components";
import Hero from "../Hero/Hero";
import WheatherCard from "../WeatherCard/WeatherCard";
import { useState } from "react";

export default () => {
    const [search, setSearch] = useState('');
    const getWeather = async () => {
        const coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=f7919ad1bd5a16f5892c093a142fa2ac`).then(res => res.json());
        console.log(coords);
        const weather = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=f7919ad1bd5a16f5892c093a142fa2ac`).then(res => res.json());
        console.log(weather);
    }
    return <>
        <Hero changeSearch={(text) => setSearch(text)} searchWeather={getWeather}/>
        <WheatherCard />
    </>
}