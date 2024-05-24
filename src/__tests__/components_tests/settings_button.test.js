import React from 'react';
import { screen } from '@testing-library/react';
import IconButton from '../../components/icon_button';
import {back_dark} from '../../images';
import { renderWithProviders } from 'utils/test_utils';

describe('Settings Button', () => {
  it('renders Settings button component', () => {
    renderWithProviders(<IconButton alt="settings button" image={back_dark} text='to the training' onClick={()=>{}}/>);
    expect(screen.getByAltText('settings button')).toBeInTheDocument();
    expect(screen.getByText('to the training')).toBeInTheDocument();
  });

});