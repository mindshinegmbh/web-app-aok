import { createContext } from 'react';
import Colors from './color';
import { back_dark, back_light, settings_light, right_arrow_dark, right_arrow_light , disabled_switch_dark, disabled_switch_light, enabled_switch_dark, enabled_switch_light } from '../images';

export const DARK = 'dark';
export const LIGHT = 'light';

interface ColorType {
  screen_background: string;
  element_background: string;
  primary_text_color: string;
  secondary_text_color: string;
  settings_text_color: string;
  header_text_color: string;
  settings_button_color: string;
}

interface IconType {
  back: string;
  settings: string;
  right_arrow: string;
  disabled_switch: string;
  enabled_switch: string;
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
      settings_button_color: Colors.green_shade_4
    },
    icons: {
      back: back_light,
      settings: settings_light,
      right_arrow: right_arrow_light,
      disabled_switch: disabled_switch_light,
      enabled_switch: enabled_switch_light
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
      settings_button_color: Colors.green_shade_4
    },
    icons: {
      back: back_dark,
      settings: settings_light,
      right_arrow: right_arrow_dark,
      disabled_switch: disabled_switch_dark,
      enabled_switch: enabled_switch_dark
    },
  },
};

export const ThemeContext = createContext(Themes.light);

export default Themes;
