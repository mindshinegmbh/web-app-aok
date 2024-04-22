import React, { useContext } from 'react';
import { FONT_LARGE, FONT_REGULAR, FontContext, ThemeContext } from '../../styling/themes';
import SettingsButton from 'components/settings_button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFont } from '../../redux/theme';
import { SelectFont } from 'redux/theme/selectors';


const FontModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext);
  const font = useAppSelector(SelectFont);
  const dispatch = useAppDispatch();

  const switchFont = ()=>{
    dispatch(setFont(currentFont.name === FONT_REGULAR ? FONT_LARGE : FONT_REGULAR))
  }

  const getImage = () => currentFont.name === FONT_LARGE ? currentTheme.icons.enabled_switch : currentTheme.icons.disabled_switch
  const getImageAltText = () => font === FONT_LARGE ? "large text mode link enabled" : "large text mode link disabled"

  return (
     <>
      <SettingsButton onClick={switchFont} alt={getImageAltText()} image={getImage()} text={"settings_page.third_line_text"}/>
     </>
  );
};

export default FontModeButton;
