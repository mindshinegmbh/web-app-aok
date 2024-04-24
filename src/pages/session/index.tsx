import React, { useContext, useEffect } from 'react';
import Header from 'components/header';
import { ThemeContext } from 'styling/themes';
import { Background } from 'styling/common';
import { useAppDispatch } from '../../redux/hooks';
import { getSessionData } from '../../redux/session';

function Session() {
  const dispatch = useAppDispatch();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getSessionData(23));
  });

  return (
    <Background
      data-testid={'session background'}
      $backgroundColor={theme.colors.screen_background}
    >
      <Header isSettingsVisible={false} />
    </Background>
  );
}

export default Session;
