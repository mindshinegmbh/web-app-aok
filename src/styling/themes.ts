import { createContext } from 'react';
import Colors from './color';

export const DARK = 'dark';
export const LIGHT = 'light';

interface ThemeValuesType {
  screen_background: string;
  element_background: string;
  primary_text_color: string;
  secondary_text_color: string;
  settings_text_color: string;
  header_text_color: string;
}
interface ThemeType {
  light: ThemeValuesType;
  dark: ThemeValuesType;
}

const Themes: ThemeType = {
  light: {
    screen_background: Colors.green_shade_0,
    element_background: Colors.white_shade_0,
    primary_text_color: Colors.white_shade_0,
    secondary_text_color: Colors.grey_shade_0,
    settings_text_color: Colors.green_shade_3,
    header_text_color: Colors.green_shade_1,
  },
  dark: {
    screen_background: Colors.black_shade_0,
    element_background: Colors.green_shade_2,
    primary_text_color: Colors.white_shade_0,
    secondary_text_color: Colors.white_shade_0,
    settings_text_color: '#987',
    header_text_color: Colors.green_shade_4,
  },
};

export const ThemeContext = createContext(Themes.light);

export default Themes;
