import styled from "styled-components";
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS } from 'chart.js/auto';
import { sign } from "chart.js/helpers";

const Graph = styled.section`
    width: 1140px;
    margin: 0 auto;
    border-radius: 20px;
    background: #E8E8E8;
    padding: 26px 40px 40px;
    @media (max-width: 1199px){
        width: 634px;
        padding: 20px 36px 25px;
        border-radius: 15px;
    }
    @media (max-width: 767px){
        width: 293px;
        padding: 18px 25px 24px;
    }
`;

const Title = styled.h2`
    margin: 0 0 20px 37px;
    width: max-content;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 1199px){
        margin: 0 0 28px 9px;
    }
    @media (max-width: 767px){
        margin: 0 0 16px 18px;
    }
`;

export default ({}) => {
    const data = [
        {
            "dt": 1731553200,
            "main": {
                "temp": 280.63,
                "feels_like": 278.77,
                "temp_min": 280.63,
                "temp_max": 280.7,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1021,
                "humidity": 85,
                "temp_kf": -0.07
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.8,
                "deg": 90,
                "gust": 3.08
            },
            "visibility": 10000,
            "pop": 0.99,
            "rain": {
                "3h": 0.99
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 03:00:00"
        },
        {
            "dt": 1731564000,
            "main": {
                "temp": 281.07,
                "feels_like": 279.5,
                "temp_min": 281.07,
                "temp_max": 281.3,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1021,
                "humidity": 84,
                "temp_kf": -0.23
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.51,
                "deg": 110,
                "gust": 3.05
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 0.68
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-14 06:00:00"
        },
        {
            "dt": 1731574800,
            "main": {
                "temp": 280.59,
                "feels_like": 279.44,
                "temp_min": 280.59,
                "temp_max": 280.59,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1021,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.91,
                "deg": 37,
                "gust": 2.19
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.4
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-14 09:00:00"
        },
        {
            "dt": 1731585600,
            "main": {
                "temp": 280.16,
                "feels_like": 277.36,
                "temp_min": 280.16,
                "temp_max": 280.16,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.24,
                "deg": 14,
                "gust": 4.32
            },
            "visibility": 10000,
            "pop": 0.99,
            "rain": {
                "3h": 1.48
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-14 12:00:00"
        },
        {
            "dt": 1731596400,
            "main": {
                "temp": 279.66,
                "feels_like": 277.15,
                "temp_min": 279.66,
                "temp_max": 279.66,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 3.49,
                "deg": 40,
                "gust": 3.93
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 15:00:00"
        },
        {
            "dt": 1731607200,
            "main": {
                "temp": 279.1,
                "feels_like": 277.12,
                "temp_min": 279.1,
                "temp_max": 279.1,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1018,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 2.57,
                "deg": 19,
                "gust": 2.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 18:00:00"
        },
        {
            "dt": 1731618000,
            "main": {
                "temp": 278.1,
                "feels_like": 275.66,
                "temp_min": 278.1,
                "temp_max": 278.1,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 2.92,
                "deg": 2,
                "gust": 3.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 21:00:00"
        },
        {
            "dt": 1731628800,
            "main": {
                "temp": 277.47,
                "feels_like": 275.3,
                "temp_min": 277.47,
                "temp_max": 277.47,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1017,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 2.44,
                "deg": 345,
                "gust": 2.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 00:00:00"
        },
        {
            "dt": 1731639600,
            "main": {
                "temp": 276.89,
                "feels_like": 274.67,
                "temp_min": 276.89,
                "temp_max": 276.89,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 2.38,
                "deg": 353,
                "gust": 2.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 03:00:00"
        }
    ];
    const labels = data.map(entry => entry.dt_txt);
    const temperatures = data.map(entry => entry.main.temp - 273.15);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatures,
                fill: false,
                borderColor: '#FFB36C',
                backgroundColor: '#FFB36C',
                borderWidth: 3,
                pointRadius: 3,
                pointBackgroundColor: '#FFB36C',
                tension: 0.4,
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour',
                    displayFormats: {
                        hour: 'ha'
                    }
                },
                position: 'top',
                grid: {
                    color: '#B5B5B5',
                },
                ticks: {
                    color: '#000',
                    font: {
                        size: 11,
                        weight: 500,
                        family: 'Montserrat',
                    },
                }
            },
            y: {
                grid: {
                    color: '#B5B5B5',
                },
                ticks: {
                    color: '#000',
                    font: {
                        size: 11,
                        weight: 500,
                        family: 'Montserrat',
                    },
                    callback: function(value) {
                        return `${value}°C`;
                    }
                },
                beginAtZero: false,
            }
        }
    };

    return (
        <Graph>
            <Title>Hourly Forecast</Title>
            <Line data={chartData} options={options} />
        </Graph>
    );
}