import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { setupStore } from './redux/store';
import { renderWithProviders } from './utils/test_utils';

test('renders learn react link', () => {
  const store = setupStore();
  renderWithProviders(<App />, { store });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
