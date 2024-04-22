import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/header';
import { MemoryRouter as Router } from "react-router-dom";
import { addI18nResources, initI18n } from '../../utils/test_utils';
describe('Header', () => {
  beforeAll(() => {
    initI18n();
  });

  it('renders Header component with settings button', () => {
    addI18nResources({ header: { back: 'Züruk' } });
  
    render(<Router><Header isSettingsVisible /></Router> );
    expect(screen.getByAltText('setting link')).toBeInTheDocument();
    expect(screen.getByAltText('back button')).toBeInTheDocument();
    expect(screen.getByText(/Züruk/i)).toBeInTheDocument();
  });

  it('renders Header component without settings button', () => {
    addI18nResources({ header: { back: 'Züruk' } });
  
    render(<Router><Header isSettingsVisible={false} /></Router> );
    expect(screen.queryAllByAltText('setting link')).toHaveLength(0)
    expect(screen.getByAltText('back button')).toBeInTheDocument();
    expect(screen.getByText(/Züruk/i)).toBeInTheDocument();
  });
});
