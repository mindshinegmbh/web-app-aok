import React, { useContext } from 'react';
import Header from '../components/header';
import { ThemeContext } from '../styling/themes';
import { Background } from '../styling/common';

function Home() {
  const theme = useContext(ThemeContext);

  return (
    <Background $backgroundColor={theme.colors.screen_background}>
      <Header isSettingsVisible={true} />
    </Background>
  );
}

export default Home;
