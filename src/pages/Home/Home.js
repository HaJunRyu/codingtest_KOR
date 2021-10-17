import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BeerMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #7c56d5;
  text-decoration: none;
  width: 130px;
  height: 50px;
  color: #fff;
  font-size: 20px;
`;

const Home = () => {
  return (
    <div>
      <BeerMore to="/beerlist">beer more</BeerMore>
    </div>
  );
};

export default Home;
