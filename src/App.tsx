import React, { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Home from 'pages/home';
import { ThemeContext, FontContext } from './styling/themes';
import { useAppSelector } from './localredux/hooks';
import { SelectColor, SelectFont, SelectTheme } from './localredux/theme/selectors';
import { getFontObjectAgaisntString, getThemeObjectAgaisntString } from './utils/general_utils';
import Settings from 'pages/settings';
import Session from 'pages/session';
import Sessionfinish from 'pages/sessionfinish';
import Mentalgesundheit from 'pages/mentalgesundheit';
import { useAppDispatch } from './localredux/hooks';
import { setThemeColor } from 'localredux/theme';

function App() {
  const theme = useAppSelector(SelectTheme);
  const font = useAppSelector(SelectFont);
  const idColor = useAppSelector(SelectColor);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const color = Number(searchParams.get('color')) | idColor;
  useEffect(() => {
    dispatch(setThemeColor(color));
  });

  return (
    <>
      <ThemeContext.Provider value={getThemeObjectAgaisntString(theme, color)}>
        <FontContext.Provider value={getFontObjectAgaisntString(font)}>
          <Routes>
            <Route path='/' element={<Home isSettingsVisible />} />
            <Route path='/settings' element={<Settings isSettingsVisible={false} />} />
            <Route path='/home' element={<Home isSettingsVisible />} />
            <Route path='/session' element={<Session isSettingsVisible />} />
            <Route path='/session_finish' element={<Sessionfinish isSettingsVisible />} />
            <Route
              path='/mental_gesundheit'
              element={<Mentalgesundheit isSettingsVisible={false} />}
            />
          </Routes>
        </FontContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
