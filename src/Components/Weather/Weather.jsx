import styled from "styled-components";
import Hero from "../Hero/Hero";
import WheatherCard from "../WeatherCard/WeatherCard";
import MoreInfo from "../MoreInfo/MoreInfo";
import HourlyGraph from "../HourlyGraph/HourlyGraph";
import ForeCast from "../ForeCast/ForeCast";
import { useEffect, useState } from "react";

const Cards = styled.ul`
    gap: 90px;
    display: flex;
    margin: 60px auto 0;
    overflow: hidden;
    justify-content: center;
`;
const FavSection = styled.section`
    width: 1140px;
    margin: 60px auto 0;
    @media (max-width: 1199px){ 
        width: 634px;
    }
    @media (max-width: 767px){
        width: 293px;
    }
`;
const FavCards = styled.ul`
    gap: 90px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px auto 0;
    @media (max-width: 1199px){ 
        gap: 60px;
    }
    @media (max-width: 767px){
        gap: 35px;
    }
`;
const FavTitle = styled.h2`
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
`;

export default () => {
    const [firstFav, setFirstFav] = useState(true);
    const [firstWeather, setFirstWeather] = useState(true);
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState(localStorage.getItem('weather') !== null ? JSON.parse(localStorage.getItem('weather')) : []);
    const [favWeather, setFavWeather] = useState(localStorage.getItem('fav') !== null ? JSON.parse(localStorage.getItem('fav')) : []);
    const [addInfo, setAddInfo] = useState({
        location: '',
        isFav: false,
        moreInfo: 0,
        dailyForecast: 0,
        hourlyForecast: 0,
    });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        if(firstFav){
            setFirstFav(false);
            favWeather.forEach(favWeatherItem => updateWeatherFav(favWeatherItem.location.name));
        }
        if (favWeather.length !== favWeather.filter((val, idx, self) => idx === self.findIndex((t) => t.location.name === val.location.name)).length) setFavWeather(favWeather.filter((val, idx, self) => idx === self.findIndex((t) => t.location.name === val.location.name)));
        localStorage.setItem('fav', JSON.stringify(favWeather))
    }, [favWeather]);
    useEffect(() => { const handleResize = () => setWindowWidth(window.innerWidth); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);
    useEffect(() => {
        if(firstWeather){
            setFirstWeather(false);
            weather.forEach(weatherItem => updateWeather(weatherItem.location.name));
        }
        setAddInfo({
            location: '',
            isFav: false,
            moreInfo: 0,
            dailyForecast: 0,
            hourlyForecast: 0
        })
        if (weather.length > 3 || weather.length !== weather.filter((val, idx, self) => idx === self.findIndex((t) => t.location.name === val.location.name)).length) setWeather(weather.filter((val, idx, self) => idx === self.findIndex((t) => t.location.name === val.location.name)).slice(0, 3));
        localStorage.setItem('weather', JSON.stringify(weather))
    }, [weather]);
    const getWeather = async () => {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b3f39c33126447e38f8161756241511&q=${search}&days=8&aqi=no&alerts=no`).then(res => res.json());
        if ('error' in weatherData) {
            alert('Invalid place!');
        } else {
            setSearch('');
            setWeather([
                weatherData,
                ...weather
            ]);
        }
    }
    const updateWeather = async (location) => {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b3f39c33126447e38f8161756241511&q=${location}&days=8&aqi=no&alerts=no`).then(res => res.json());
        setWeather(prevWeather => {
            const updatedWeather = [...prevWeather];
            const index = updatedWeather.findIndex(weatherItem => weatherItem.location.name === location);
            index !== -1 ? updatedWeather[index] = weatherData : updatedWeather.push(weatherData);
            return updatedWeather;
        });
    }
    const updateWeatherFav = async (location) => {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b3f39c33126447e38f8161756241511&q=${location}&days=8&aqi=no&alerts=no`).then(res => res.json());
        setFavWeather(prevWeather => {
            const updatedWeather = [...prevWeather];
            const index = updatedWeather.findIndex(weatherItem => weatherItem.location.name === location);
            index !== -1 ? updatedWeather[index] = weatherData : updatedWeather.push(weatherData);
            return updatedWeather;
        });
    }
    const delWeather = (location) => setWeather(weather.filter(weatherItem => weatherItem.location.name !== location));
    const delWeatherFav = (location) => setFavWeather(favWeather.filter(weatherItem => weatherItem.location.name !== location));
    const delFav = (data) => setFavWeather(favWeather.filter(weatherItem => weatherItem.location.name !== data.location.name));
    const showMoreInfo = (location, component, isFav) => setAddInfo(prevAddInfo => { 
        return {
            location,
            isFav,
            moreInfo: component === 1 || (location === prevAddInfo.location && prevAddInfo.moreInfo) ? 1 : 0,
            hourlyForecast: component === 2 || (location === prevAddInfo.location && prevAddInfo.hourlyForecast) ? 1 : 0,
            dailyForecast: component === 3 || (location === prevAddInfo.location && prevAddInfo.dailyForecast) ? 1 : 0,
        }
    });
    const addToFav = (data) => setFavWeather([...favWeather, data]);
    return <>
        <Hero changeSearch={(text) => setSearch(text)} searchWeather={getWeather}/>
        {weather.length > 0 && <Cards>{
            window.innerWidth < 768 ? weather.slice(0, 1).map(weatherInfo => (<WheatherCard key={weatherInfo.id} favFunc={addToFav} delFunc={delWeather} moreFunc={showMoreInfo} updateFunc={updateWeather} data={weatherInfo} isFav={false}/>))
            : window.innerWidth < 1200 ? weather.slice(0, 2).map(weatherInfo => (<WheatherCard key={weatherInfo.id} favFunc={addToFav} delFunc={delWeather} moreFunc={showMoreInfo} updateFunc={updateWeather} data={weatherInfo} isFav={false}/>))
            : weather.map(weatherInfo => (<WheatherCard key={weatherInfo.id} favFunc={addToFav} delFunc={delWeather} moreFunc={showMoreInfo} updateFunc={updateWeather} data={weatherInfo} isFav={false}/>))}
        </Cards>}
        {favWeather.length > 0 &&  <FavSection>
        <FavTitle>Favorites</FavTitle>
        <FavCards>
            {favWeather.map(weatherInfo => (<WheatherCard key={weatherInfo.id} isFav={true} favFunc={delFav} delFunc={delWeatherFav} moreFunc={showMoreInfo} updateFunc={updateWeatherFav} data={weatherInfo}/>))}
        </FavCards></FavSection>}
        {addInfo.moreInfo ? <MoreInfo data={addInfo.isFav ? favWeather.find(weatherItem => weatherItem.location.name === addInfo.location) : weather.find(weatherItem => weatherItem.location.name === addInfo.location)}/> : null}
        {addInfo.hourlyForecast ? <HourlyGraph data={addInfo.isFav ? favWeather.find(weatherItem => weatherItem.location.name === addInfo.location) : weather.find(weatherItem => weatherItem.location.name === addInfo.location)}/> : null}
        {addInfo.dailyForecast ? <ForeCast data={addInfo.isFav ? favWeather.find(weatherItem => weatherItem.location.name === addInfo.location) : weather.find(weatherItem => weatherItem.location.name === addInfo.location)}/> : null}
    </>
}