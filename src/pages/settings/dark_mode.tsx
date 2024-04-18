import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../styling/themes';
import { RegularText } from 'styling/common';
import Icon from 'components/icon';
import { useTranslation } from 'react-i18next';
import SettingsButton from 'components/settings_button';

export interface SettingsButtonProps {
 
}

const DarkModeButton = ({  }: SettingsButtonProps) => {
  const currentTheme = useContext(ThemeContext);
  const { t } = useTranslation();
  //const dispatch = useAppDispatch();

  useEffect(() => {
    //  setTimeout(()=> {
    //     dispatch(setTheme(DARK))
    //  }, 5000)
  });

  return (
     <>
      <SettingsButton alt={"dark mode link"} image={currentTheme.icons.disabled_switch} text={"settings_page.second_line_text"}/>
     </>
  );
};

export default DarkModeButton;
