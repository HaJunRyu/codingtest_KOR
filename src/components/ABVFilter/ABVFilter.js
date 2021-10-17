import React from 'react';
import * as Styled from './ABVFilter.styled';

function ABVFilter({ onFilterChange }) {
  return (
    <Styled.FilterSecion>
      <span>ADV 필터링</span>
      <Styled.FilterList onChange={onFilterChange}>
        {new Array(15).fill(0).map((_, i) => (
          <li data-min={i} data-max={i + 1} key={i}>
            <input type="checkbox" id={`abv${i}`} />
            <label htmlFor={`abv${i}`}>{`${i} - ${i + 1}`}</label>
          </li>
        ))}
      </Styled.FilterList>
    </Styled.FilterSecion>
  );
}

export default ABVFilter;
