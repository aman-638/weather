import React from "react";
import styled from "styled-components";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { MdLocationCity } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

const WeatherInfo = styled.div`
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;
`;

const WeatherIconContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <div></div>;
  }

  const { name, main, weather: weatherDetails, wind } = weather;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <WeatherContainer>
      <WeatherIconContainer>
        <WeatherIcon src={weatherIconUrl} alt={weatherDetails[0].description} />
      </WeatherIconContainer>
      <WeatherInfo>
        <Icon>
          <MdLocationCity size={24} />
        </Icon>
        City: {name}
      </WeatherInfo>
      <WeatherInfo>
        <Icon>
          <FaTemperatureHigh size={24} />
        </Icon>
        Temperature: {main.temp} °C
      </WeatherInfo>
      <WeatherInfo>
        <Icon>
          <WiHumidity size={24} />
        </Icon>
        Humidity: {main.humidity} %
      </WeatherInfo>
      <WeatherInfo>
        <Icon>
          <WiStrongWind size={24} />
        </Icon>
        Wind Speed: {wind.speed} m/s
      </WeatherInfo>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
