import React, { useContext } from 'react';
import { DARK, LIGHT, ThemeContext } from '../../styling/themes';
import SettingsButton from 'components/settings_button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setTheme } from '../../redux/theme';
import { SelectTheme } from 'redux/theme/selectors';


const DarkModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(SelectTheme);
  
  const switchTheme = ()=>{
    dispatch(setTheme(currentTheme.name === LIGHT ? DARK : LIGHT))
  }

  const getImage = () => currentTheme.name === DARK ? currentTheme.icons.enabled_switch : currentTheme.icons.disabled_switch
  const getAltText = () => theme === DARK ? "dark mode link enabled" : "dark mode link disabled"

  return (
     <>
      <SettingsButton onClick={switchTheme} alt={getAltText()} image={getImage()} text={"settings_page.second_line_text"}/>
     </>
  );
};

export default DarkModeButton;
