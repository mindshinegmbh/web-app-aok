import React from 'react';
import { render, screen } from '@testing-library/react';
import DarkModeButton from '../../../pages/settings/dark_mode';
import { MemoryRouter as Router } from "react-router-dom";
import { renderWithProviders } from '../../../utils/test_utils';
import { DARK, LIGHT } from '../../../styling/themes';
describe('DarkModeButton', () => {
  it('renders Dark mode component with enabled switch', () => {
    
    // renderWithProviders(<Router><DarkModeButton /></Router> , {
    //     preloadedState: {
    //       theme: DARK
    //     }
    // });
    // expect(screen.getByAltText('dark mode link enabled')).toBeInTheDocument();
    // expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
  });

//   it('renders Header component without settings button', () => {
//     addI18nResources({ header: { back: 'Züruk' } });
  
//     render(<Router><DarkModeButton isSettingsVisible={false} /></Router> );
//     expect(screen.queryAllByAltText('setting link')).toHaveLength(0)
//     expect(screen.getByAltText('back button')).toBeInTheDocument();
//     expect(screen.getByText(/Züruk/i)).toBeInTheDocument();
//   });
});
