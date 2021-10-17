import React from 'react';
import { GoToHomeButton } from '../../components';
import BeerListContainer from '../../containers/BeerListContainer/BeerListContainer';

function BeerList() {
  return (
    <>
      <GoToHomeButton />
      <BeerListContainer />
    </>
  );
}

export default BeerList;
