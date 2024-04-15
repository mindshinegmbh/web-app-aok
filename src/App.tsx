import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <main className='py-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route
							path="/properties"
							element={<PropertiesPage />}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route
							path="/activate/:uid/:token"
							element={<ActivatePage />}
						/>
						<Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
