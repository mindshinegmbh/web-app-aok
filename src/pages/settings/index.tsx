import React, { useContext } from 'react';
import Header from 'components/header';
import { ThemeContext } from 'styling/themes';
import { Background } from 'styling/common';
import { SettingListParent } from './styles';
import SettingsButton from 'components/settings_button';
import DarkModeButton from './dark_mode';
import FontModeButton from './large_text_mode';

function Settings() {
  const theme = useContext(ThemeContext);

  return (
    <Background $backgroundColor={theme.colors.screen_background}>
      <Header isSettingsVisible={false} />
       <SettingListParent>
         <SettingsButton onClick={() => {}} alt={"training link"} image={theme.icons.right_arrow} text={"settings_page.first_line_text"} />
         <DarkModeButton />
         <FontModeButton />
         <SettingsButton onClick={() => {}} alt={"barrier link"} image={theme.icons.right_arrow} text={"settings_page.fourth_line_text"} />
       </SettingListParent>
    </Background>
  );
}

export default Settings;
