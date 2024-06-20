import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  outline: none;
  &:focus {
    border-color: pink;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default Search;
