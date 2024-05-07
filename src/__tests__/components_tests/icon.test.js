import React from 'react';
import { screen } from '@testing-library/react';
import Icon from '../../components/icon';
import {back_dark} from '../../images';
import { renderWithProviders } from 'utils/test_utils';

describe('Icon', () => {
  it('renders Icon component', () => {
    renderWithProviders(<Icon alt="back button" link={back_dark} />);
    expect(screen.getByAltText('back button')).toBeInTheDocument();
  });
});