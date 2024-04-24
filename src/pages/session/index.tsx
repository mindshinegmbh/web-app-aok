import React, { useContext } from 'react';
import Header from 'components/header';
import { ThemeContext } from 'styling/themes';
import { Background } from 'styling/common';
import { useAppSelector } from '../../redux/hooks';
import { SelectTransformedSessionData } from '../../redux/session/selectors';

function Session() {
  const theme = useContext(ThemeContext);
  const sessionData = useAppSelector(SelectTransformedSessionData);
  console.log(sessionData)
  
  return (
    <Background
      data-testid={'session background'}
      $backgroundColor={theme.colors.screen_background}
    >
      <Header isSettingsVisible={false} />
      <div>
        
      </div>
    </Background>
  );
}

export default Session;
