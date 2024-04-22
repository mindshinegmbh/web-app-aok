import React from 'react';
import { screen } from '@testing-library/react';
import Settings from '../../../pages/settings';
import { MemoryRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test_utils';
import { addI18nResources, initI18n } from '../../../utils/test_utils';
describe('LargeModeButton', () => {
  beforeAll(() => {
    initI18n();
  });

  it('renders Settings component', () => {
    addI18nResources({
      settings_page: {
        first_line_text: 'Trainingsfortschritt',
        second_line_text: 'Dark Mode',
        third_line_text: 'Large Text',
        fourth_line_text: 'Barrierefreiheit',
      },
    });

    renderWithProviders(
      <Router>
        <Settings />
      </Router>,
    );
    expect(screen.getByText(/Trainingsfortschritt/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    expect(screen.getByText(/Large Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Barrierefreiheit/i)).toBeInTheDocument();
  });
});
