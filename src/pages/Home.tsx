import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Counter } from '../components/counter';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';

function Home() {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <Header isSettingsVisible={true} />

      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('home.heading')}
        </a>
        <p>Dooa Ansari 12</p>
        <Counter />
      </header> */}
    </div>
  );
}

export default Home;
