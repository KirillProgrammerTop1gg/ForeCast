import styled from "styled-components";
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS } from 'chart.js/auto';
import { sign } from "chart.js/helpers";

const Graph = styled.section`
    width: 1140px;
    margin: 80px auto 0;
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

export default ({ data }) => {
    const newHours = data.forecast.forecastday[0].hour.concat(data.forecast.forecastday[1].hour, data.forecast.forecastday[2].hour).map(entry => entry.time_epoch*1000);
    const labels = newHours.filter(entry => new Date().getTime() <= entry && entry <= new Date().getTime() + (window.innerWidth < 768 ? 6 : window.innerWidth < 1200 ? 12 : 24) * 3600 * 1000);
    const temperatures = data.forecast.forecastday[0].hour.map(entry => entry.temp_c);
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