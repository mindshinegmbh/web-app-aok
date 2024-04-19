import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import { ThemeContext, FontContext } from './styling/themes';
import { useAppSelector } from './redux/hooks';
import { SelectFont, SelectTheme } from './redux/theme/selectors';
import { getFontObjectAgaisntString, getThemeObjectAgaisntString } from './utils/general_utils';
import Settings from 'pages/settings';

function App() {
  const theme = useAppSelector(SelectTheme);
  const font = useAppSelector(SelectFont);
  return (
    <>
      <Router>
        <ThemeContext.Provider value={getThemeObjectAgaisntString(theme)}>
          <FontContext.Provider value={getFontObjectAgaisntString(font)}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </FontContext.Provider>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
