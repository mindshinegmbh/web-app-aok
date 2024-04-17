import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/home'
import { ThemeContext } from './styling/themes';
import { useAppSelector } from './redux/hooks';
import { SelectTheme } from './redux/theme/selectors';
import { getThemeObjectAgaisntString } from './utils/general_utils';
import Settings from 'pages/settings';

function App() {
  const theme = useAppSelector(SelectTheme);
  return (
    <>
      <Router>
        <ThemeContext.Provider value={getThemeObjectAgaisntString(theme)}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
							path="/settings"
							element={<Settings />}
						/>
						{/* <Route path="/login" element={<LoginPage />} /> */}
						{/* <Route path="/register" element={<RegisterPage />} />
						<Route
							path="/activate/:uid/:token"
							element={<ActivatePage />}
						/>
						<Route path="*" element={<NotFound />} /> */}
          </Routes>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
