import React from 'react';
import { screen } from '@testing-library/react';
import Back from '../../components/back';
import { back_dark } from '../../images';
import { addI18nResources, initI18n, renderWithProviders } from '../../utils/test_utils';
import { MemoryRouter as Router } from "react-router-dom";

describe('Back', () => {
  beforeAll(() => {
    initI18n();
  });
  it('renders Back component', () => {
    addI18nResources({ header: { back: 'Züruk' } });
    renderWithProviders(<Router><Back alt='back button' link={back_dark} /></Router>);
    expect(screen.getByAltText('back button')).toBeInTheDocument();
    expect(screen.getByText(/Züruk/i)).toBeInTheDocument();
  });
});
