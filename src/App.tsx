import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import { ThemeContext, FontContext } from './styling/themes';
import { useAppSelector } from './localredux/hooks';
import { SelectFont, SelectTheme } from './localredux/theme/selectors';
import { getFontObjectAgaisntString, getThemeObjectAgaisntString } from './utils/general_utils';
import Settings from 'pages/settings';
import Session  from 'pages/session';
import Sessionfinish from 'pages/sessionfinish';


function App() {
  const theme = useAppSelector(SelectTheme);
  const font = useAppSelector(SelectFont);
  return (
    <>
      <Router>
        <ThemeContext.Provider value={getThemeObjectAgaisntString(theme)}>
          <FontContext.Provider value={getFontObjectAgaisntString(font)}>
            <Routes>
              <Route path='/' element={<Home isSettingsVisible/>} />
              <Route path='/settings' element={<Settings isSettingsVisible={false}/>} />
              <Route path='/home' element={<Home isSettingsVisible/>} />
              <Route path='/session' element={<Session isSettingsVisible/>} />
              <Route path='/session_finish' element={<Sessionfinish isSettingsVisible/>} />
            </Routes>
          </FontContext.Provider>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
