import React, { useContext } from 'react';
import Header from '../components/header';
import { FontContext, ThemeContext } from '../styling/themes';
import { Background, RegularText } from '../styling/common';

function Home() {
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext)
  console.log(currentTheme.name)

  return (
    <Background $backgroundColor={currentTheme.colors.screen_background}>
      <Header isSettingsVisible={true} />
      <RegularText $textSize={currentFont.regular_font_size} $textColor={currentTheme.colors.settings_button_color}>Home Page</RegularText>
    </Background>
  );
}

export default Home;
