import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBeerList } from '../../api/beerAPI';
import { ABVFilter, BeerTable } from '../../components';

function BeerListContainer() {
  const [beersData, setBeersData] = useState([]);
  const [beerList, setBeerList] = useState([]);
  const { columns } = useSelector(state => state);

  const [abvFilter, setAbvFilter] = useState([]);

  const onfilterChangeHandler = useCallback(
    ({ target }) => {
      const min = target.parentNode.getAttribute('data-min');
      const max = target.parentNode.getAttribute('data-max');

      if (target.checked) {
        setAbvFilter([...abvFilter, { id: min, min, max }]);
      } else {
        setAbvFilter(abvFilter.filter(({ id }) => id !== min));
      }
    },
    [abvFilter]
  );

  useEffect(() => {
    const fetchBeerList = async () => {
      let beers = await getBeerList();
      beers = beers.map(({ name, tagline, first_brewed, abv, ibu, srm }) => ({
        name,
        tagline,
        first_brewed,
        abv,
        ibu,
        srm,
      }));
      setBeersData(beers);
      setBeerList(beers);
    };

    fetchBeerList();
  }, []);

  useEffect(() => {
    const filterBeerList = () => {
      if (abvFilter.length === 0) {
        setBeerList(beersData);
        return;
      }
      const afterBeerList = beersData.filter(({ abv }) => {
        return abvFilter.some(({ min, max }) => {
          return abv >= +min && abv <= +max;
        });
      });

      setBeerList(afterBeerList);
    };
    filterBeerList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abvFilter]);

  return (
    <>
      <BeerTable columns={columns} beerList={beerList} />
      <ABVFilter onFilterChange={onfilterChangeHandler} />
    </>
  );
}

export default BeerListContainer;
