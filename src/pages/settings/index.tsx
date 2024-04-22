import React, { useContext } from 'react';
import Header from 'components/header';
import { ThemeContext } from 'styling/themes';
import { Background } from 'styling/common';
import { SettingListParent } from './styles';
import SettingsButton from 'components/settings_button';
import DarkModeButton from './dark_mode';
import FontModeButton from './large_text_mode';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const theme = useContext(ThemeContext);
  const navigation = useNavigate()

  return (
    <Background data-testid={"settings background"} $backgroundColor={theme.colors.screen_background}>
      <Header isSettingsVisible={false} />
       <SettingListParent>
         <SettingsButton testid={"training"} onClick={() => {navigation("/home")}} alt={"training link"} image={theme.icons.right_arrow} text={"settings_page.first_line_text"} />
         <DarkModeButton />
         <FontModeButton />
         <SettingsButton testid={"barrier"} onClick={() => {}} alt={"barrier link"} image={theme.icons.right_arrow} text={"settings_page.fourth_line_text"} />
       </SettingListParent>
    </Background>
  );
}

export default Settings;
