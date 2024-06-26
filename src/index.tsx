import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './localredux/store';
import { Provider } from 'react-redux';
import './internationalization/i18n';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './utils/analytics';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureAnalytics } from './utils/analytics';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const persistor = persistStore(store);
configureAnalytics();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
