import React from 'react';
import { screen } from '@testing-library/react';
import LargeModeButton from '../../../pages/settings/large_text_mode';
import { MemoryRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test_utils';
import { DARK, FONT_LARGE, FONT_REGULAR, LIGHT } from '../../../styling/themes';
import { setupStore } from 'redux/store';
import { setFont, setTheme } from 'redux/theme';
import { addI18nResources, initI18n } from '../../../utils/test_utils';
describe('LargeModeButton', () => {
  beforeAll(() => {
    initI18n();
  });

  it('renders Large text mode component with enabled switch', () => {
    addI18nResources({ settings_page: { third_line_text: 'Large Text' } });

    const store = setupStore();
    store.dispatch(setFont(FONT_LARGE));

    renderWithProviders(
      <Router>
        <LargeModeButton />
      </Router>,
      { store },
    );
    expect(screen.getByAltText('large text mode link enabled')).toBeInTheDocument();
    expect(screen.getByText(/Large Text/i)).toBeInTheDocument();
  });

  it('does not render Large text mode component with disabled switch', () => {
    addI18nResources({ settings_page: { third_line_text: 'Large Text' } });

    const store = setupStore();
    store.dispatch(setFont(FONT_REGULAR));

    renderWithProviders(
      <Router>
        <LargeModeButton />
      </Router>,
      { store },
    );
    expect(screen.getByAltText('large text mode link disabled')).toBeInTheDocument();
    expect(screen.getByText(/Large Text/i)).toBeInTheDocument();
  });

});
