import React from 'react';
import { render, screen } from '@testing-library/react';
import DarkModeButton from '../../../pages/settings/dark_mode';
import { MemoryRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test_utils';
import { DARK, LIGHT } from '../../../styling/themes';
import { setupStore } from 'redux/store';
import { setTheme } from 'redux/theme';
import { addI18nResources, initI18n } from '../../../utils/test_utils';
describe('DarkModeButton', () => {
  beforeAll(() => {
    initI18n();
  });

  it('renders Dark mode component with enabled switch', () => {
    addI18nResources({ settings_page: { second_line_text: 'Dark Mode' } });

    const store = setupStore();
    store.dispatch(setTheme(DARK));

    renderWithProviders(
      <Router>
        <DarkModeButton />
      </Router>,
      { store },
    );
    expect(screen.getByAltText('dark mode link enabled')).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
  });

  it('does not render Dark mode component with disabled switch', () => {
    addI18nResources({ settings_page: { second_line_text: 'Dark Mode' } });

    const store = setupStore();
    store.dispatch(setTheme(LIGHT));

    renderWithProviders(
      <Router>
        <DarkModeButton />
      </Router>,
      { store },
    );
    expect(screen.getByAltText('dark mode link disabled')).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
  });

});
