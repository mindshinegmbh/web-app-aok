import React, { useContext } from 'react';
import Header from '../components/header';
import { ThemeContext } from '../styling/themes';
import { Background } from '../styling/common';

function Settings() {
  const theme = useContext(ThemeContext);

  return (
    <Background $backgroundColor={theme.colors.screen_background}>
      <Header isSettingsVisible={false} />
    </Background>
  );
}

export default Settings;
