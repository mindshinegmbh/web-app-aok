import React, { useContext } from 'react';
import { DARK, LIGHT, ThemeContext } from '../../styling/themes';
import SettingsButton from 'components/settings_button';
import { useAppDispatch } from '../../redux/hooks';
import { setTheme } from '../../redux/theme';


const DarkModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  console.log(currentTheme.name)

  const switchTheme = ()=>{
    dispatch(setTheme(currentTheme.name === LIGHT ? DARK : LIGHT))
  }

  const getImage = () => currentTheme.name === DARK ? currentTheme.icons.enabled_switch : currentTheme.icons.disabled_switch

  return (
     <>
      <SettingsButton onClick={switchTheme} alt={"dark mode link"} image={getImage()} text={"settings_page.second_line_text"}/>
     </>
  );
};

export default DarkModeButton;
