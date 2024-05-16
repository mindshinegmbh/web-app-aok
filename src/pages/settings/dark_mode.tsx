import React, { useContext } from 'react';
import { DARK, LIGHT, ThemeContext } from '../../styling/themes';
import SettingsButton from 'components/settings_button';
import { useAppDispatch, useAppSelector } from '../../localredux/hooks';
import { setTheme } from '../../localredux/theme';
import { SelectTheme } from '../../localredux/theme/selectors';


const DarkModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(SelectTheme);

  
  const switchTheme = ()=>{
    const themeToSet = currentTheme.name === LIGHT ? DARK : LIGHT
    dispatch(setTheme(themeToSet))
  }

  const getImage = () => currentTheme.name === DARK ? currentTheme.icons.enabled_switch : currentTheme.icons.disabled_switch
  const getAltText = () => theme === DARK ? "dark mode link enabled" : "dark mode link disabled"

  return (
     <>
      <SettingsButton testid={"dark mode"} onClick={switchTheme} alt={getAltText()} image={getImage()} text={"settings_page.second_line_text"}/>
     </>
  );
};

export default DarkModeButton;
