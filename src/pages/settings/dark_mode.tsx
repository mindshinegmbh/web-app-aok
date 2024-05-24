import React, { useContext } from 'react';
import { DARK, LIGHT, ThemeContext } from '../../styling/themes';
import IconButton from 'components/icon_button';
import { useAppDispatch, useAppSelector } from '../../localredux/hooks';
import { setTheme } from '../../localredux/theme';
import { SelectTheme } from '../../localredux/theme/selectors';
import { sendCustomEvent } from 'utils/analytics';
import { GA4Category, GA4Event } from 'utils/custom_events';

const DarkModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(SelectTheme);

  const switchTheme = () => {
    sendCustomEvent(
      GA4Category.settings,
      currentTheme.name === LIGHT ? GA4Event.darkmode_off : GA4Event.darkmode_on,
    );
    dispatch(setTheme(currentTheme.name === LIGHT ? DARK : LIGHT));
    window.location.reload();
  };

  const getImage = () =>
    currentTheme.name === DARK
      ? currentTheme.icons.enabled_switch
      : currentTheme.icons.disabled_switch;
  const getAltText = () => (theme === DARK ? 'dark mode link enabled' : 'dark mode link disabled');

  return (
    <div aria-selected={theme === DARK}>
      <IconButton
        testid={'dark mode'}
        onClick={switchTheme}
        alt={getAltText()}
        image={getImage()}
        text={'settings_page.second_line_text'}
      />
    </div>
  );
};

export default DarkModeButton;
