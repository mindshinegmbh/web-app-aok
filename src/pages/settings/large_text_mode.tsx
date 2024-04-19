import React, { useContext } from 'react';
import { FONT_LARGE, FONT_REGULAR, FontContext, ThemeContext } from '../../styling/themes';
import SettingsButton from 'components/settings_button';
import { useAppDispatch } from '../../redux/hooks';
import { setFont } from '../../redux/theme';


const FontModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext);
  const dispatch = useAppDispatch();

  const switchFont = ()=>{
    dispatch(setFont(currentFont.name === FONT_REGULAR ? FONT_LARGE : FONT_REGULAR))
  }

  const getImage = () => currentFont.name === FONT_LARGE ? currentTheme.icons.enabled_switch : currentTheme.icons.disabled_switch

  return (
     <>
      <SettingsButton onClick={switchFont} alt={"large text mode link"} image={getImage()} text={"settings_page.third_line_text"}/>
     </>
  );
};

export default FontModeButton;
