import React, { useContext, useEffect } from 'react';
import Header from '../components/header';
import { FontContext, ThemeContext } from '../styling/themes';
import { Background, RegularText } from '../styling/common';
import { useAppDispatch } from '../redux/hooks';
import { getSessionData } from '../redux/session';

function Home() {
  const dispatch = useAppDispatch();
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext)
  useEffect(() => {
    dispatch(getSessionData(23));
  });
 
  return (
    <Background $backgroundColor={currentTheme.colors.screen_background}>
      <Header isSettingsVisible={true} />
      <RegularText $textSize={currentFont.regular_font_size} $textColor={currentTheme.colors.settings_button_color}>Home Page</RegularText>
      <RegularText $textSize={currentFont.regular_font_size} $textColor={currentTheme.colors.settings_button_color}>{process.env.REACT_APP_ENV}</RegularText>
    </Background>
  );
}

export default Home;
