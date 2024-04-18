import React, { useContext } from 'react';
import Header from 'components/header';
import { ThemeContext } from 'styling/themes';
import { Background } from 'styling/common';
import { SettingListParent } from './styles';
import SettingsButton from 'components/settings_button';
import DarkModeButton from './dark_mode';

function Settings() {
  const theme = useContext(ThemeContext);

  return (
    <Background $backgroundColor={theme.colors.screen_background}>
      <Header isSettingsVisible={false} />
       <SettingListParent>
         <SettingsButton alt={"training link"} image={theme.icons.right_arrow} text={"settings_page.first_line_text"} />
         <DarkModeButton />
       </SettingListParent>
    </Background>
  );
}

export default Settings;
