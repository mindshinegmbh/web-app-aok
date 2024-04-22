import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsButton from '../../components/settings_button';
import {back_dark} from '../../images';

describe('Settings Button', () => {
  it('renders Settings button component', () => {
    render(<SettingsButton alt="settings button" image={back_dark} text='to the training' onClick={()=>{}}/>);
    expect(screen.getByAltText('settings button')).toBeInTheDocument();
    expect(screen.getByText('to the training')).toBeInTheDocument();
  });

});