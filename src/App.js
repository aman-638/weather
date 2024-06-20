import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: url("https://images.pexels.com/photos/1120094/pexels-photo-1120094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
`;

const SpinnerContainer = styled.div`
  margin: 50px 0px;
`;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "8469761dc0f3e143e47731f83c67ed3f";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Title>Weather Dashboard</Title>
      <Search onSearch={fetchWeather} />
      {loading ? (
        <SpinnerContainer>
          <ClipLoader color="#ffffff" size={50} />
        </SpinnerContainer>
      ) : error ? (
        <ErrorContainer>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-filled-line-8/64/weather_warning_weather_forecast_climate_meteorology-1024.png"
            alt="Error"
            width="100"
          />
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <WeatherDisplay weather={weather} />
      )}
    </AppContainer>
  );
};

export default App;
