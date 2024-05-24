import React, { useContext } from 'react';
import { FONT_LARGE, FONT_REGULAR, FontContext, ThemeContext } from '../../styling/themes';
import IconButton from 'components/icon_button';
import { useAppDispatch, useAppSelector } from '../../localredux/hooks';
import { setFont } from '../../localredux/theme';
import { SelectFont } from '../../localredux/theme/selectors';
import { sendCustomEvent } from 'utils/analytics';
import { GA4Category, GA4Event } from 'utils/custom_events';

const FontModeButton = () => {
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext);
  const font = useAppSelector(SelectFont);
  const dispatch = useAppDispatch();

  const switchFont = () => {
    sendCustomEvent(
      GA4Category.settings,
      currentFont.name === FONT_REGULAR ? GA4Event.largetext_off : GA4Event.largetext_on,
    );
    dispatch(setFont(currentFont.name === FONT_REGULAR ? FONT_LARGE : FONT_REGULAR));
    window.location.reload();
  };

  const getImage = () =>
    currentFont.name === FONT_LARGE
      ? currentTheme.icons.enabled_switch
      : currentTheme.icons.disabled_switch;
  const getImageAltText = () =>
    font === FONT_LARGE ? 'large text mode link enabled' : 'large text mode link disabled';

  return (
    <div aria-selected={font === FONT_LARGE}>
      <IconButton
        testid={'large text'}
        onClick={switchFont}
        alt={getImageAltText()}
        image={getImage()}
        text={'settings_page.third_line_text'}
      />
    </div>
  );
};

export default FontModeButton;
