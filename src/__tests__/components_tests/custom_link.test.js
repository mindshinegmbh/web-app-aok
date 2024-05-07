import React from 'react';
import { screen } from '@testing-library/react';
import CustomLink from '../../components/custom_link';
import {back_dark} from '../../images';
import { renderWithProviders } from 'utils/test_utils';

describe('Custom Link', () => {
  it('renders Custom Link component when show is true', () => {
    renderWithProviders(<CustomLink alt="custom link" link={back_dark} href='#' show/>);
    expect(screen.getByAltText('custom link')).toBeInTheDocument();
  });

  it('does not renders Custom Link component when show is false', () => {
    renderWithProviders(<CustomLink alt="custom link" link={back_dark} href='#' show={false}/>);
    expect(screen.queryByAltText('custom link')).not.toBeInTheDocument();
  });
});