import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { setupStore } from './redux/store';
import { addI18nResources, renderWithProviders } from './utils/test_utils';
import { initI18n } from './utils/test_utils';

beforeAll(() => {
  initI18n();
});

test('renders learn react link', () => {
  const store = setupStore();
  addI18nResources({ header: { back: 'Züruk' } });
  renderWithProviders(<App />, { store });
  const linkElement = screen.getByText(/Züruk/i);
  expect(linkElement).toBeInTheDocument();
});
