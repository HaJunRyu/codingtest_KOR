import React from 'react';
import { HOME_PAGE } from '../../constant';
import * as Styled from './GoToHomeButton.styled';

function GoToHomeButton() {
  return <Styled.GoToHomeButton to={HOME_PAGE}>홈으로</Styled.GoToHomeButton>;
}

export default GoToHomeButton;
