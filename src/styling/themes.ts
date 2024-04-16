import { createContext } from 'react';
import Colors from './color';
import { back_dark, back_light, settings_light } from '../images';

export const DARK = 'dark';
export const LIGHT = 'light';

interface ColorType {
  screen_background: string;
  element_background: string;
  primary_text_color: string;
  secondary_text_color: string;
  settings_text_color: string;
  header_text_color: string;
}

interface IconType {
  back: string;
  settings: string;
}

interface ThemeValuesType {
  colors: ColorType;
  icons: IconType;
}

interface ThemeType {
  light: ThemeValuesType;
  dark: ThemeValuesType;
}

const Themes: ThemeType = {
  light: {
    colors: {
      screen_background: Colors.green_shade_0,
      element_background: Colors.white_shade_0,
      primary_text_color: Colors.white_shade_0,
      secondary_text_color: Colors.grey_shade_0,
      settings_text_color: Colors.green_shade_3,
      header_text_color: Colors.green_shade_1,
    },
    icons: {
      back: back_light,
      settings: settings_light,
    },
  },
  dark: {
    colors: {
      screen_background: Colors.green_shade_0,
      element_background: Colors.white_shade_0,
      primary_text_color: Colors.white_shade_0,
      secondary_text_color: Colors.grey_shade_0,
      settings_text_color: Colors.green_shade_3,
      header_text_color: Colors.green_shade_1,
    },
    icons: {
      back: back_dark,
      settings: settings_light,
    },
  },
};

export const ThemeContext = createContext(Themes.light);

export default Themes;
