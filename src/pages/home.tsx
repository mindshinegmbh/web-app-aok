import React, { useContext, useEffect } from 'react';
import { FontContext, ThemeContext } from '../styling/themes';
import { RegularText } from '../styling/common';
import { useAppDispatch } from '../localredux/hooks';
import { getSessionData } from '../localredux/session';
import withBase from 'hocs/base_page';

function Home() {
  const dispatch = useAppDispatch();
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext);
  useEffect(() => {
    dispatch(getSessionData(23));
  });

  return (
    <>
      <RegularText
        $textSize={currentFont.regular_font_size}
        $textColor={currentTheme.colors.settings_button_color}
      >
        Home Page
      </RegularText>
      <RegularText
        $textSize={currentFont.regular_font_size}
        $textColor={currentTheme.colors.settings_button_color}
      >
        {process.env.REACT_APP_ENV}
      </RegularText>
    </>
  );
}

export default withBase(Home);
