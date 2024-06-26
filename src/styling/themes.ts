import { createContext } from 'react';
import { ThemesVersionPink } from './pinktheme';
import { ThemesVersionBlue } from './bluetheme';
import { ThemesVersionPurple } from './purpletheme';
import { ThemesVersionGreen } from './greentheme';
import { ThemesVersionYellow } from './yellowtheme';
import { ThemesVersionGrey } from './greytheme';

export const DARK = 'dark';
export const LIGHT = 'light';
export const FONT_LARGE = 'large';
export const FONT_REGULAR = 'regular';

export interface FontSizes {
  name: string;
  regular_font_size: string;
  xsmall_font_size: string;
  xsmall_font_weight: string;
  small_font: string;
  large_font: string;
  xlarge_font: string;
}

export interface FontVersion {
  large: FontSizes;
  regular: FontSizes;
}

export const Fonts: FontVersion = {
  large: {
    name: FONT_LARGE,
    regular_font_size: '20px',
    xsmall_font_size: '14px',
    xsmall_font_weight: '700',
    small_font: '20px',
    large_font: '25px',
    xlarge_font: '30px',
  },
  regular: {
    name: FONT_REGULAR,
    regular_font_size: '16px',
    small_font: '14px',
    xsmall_font_size: '8px',
    xsmall_font_weight: '400',
    large_font: '18px',
    xlarge_font: '30px',
  },
};
export interface ColorType {
  screen_background: string;
  element_background: string;
  primary_text_color: string;
  secondary_text_color: string;
  settings_text_color: string;
  header_text_color: string;
  settings_button_color: string;
  audio_player_background: string;
  forward_backward_background: string;
  forward_backward_bordercolor: string;
  audio_player_text_color: string;
  progress_bar_color: string;
  uncompleted_bar_color: string;
  all_white_color: string;
  text_field_place_holder: string;
  field_background_color: string;
  button_background: string;
  button_text: string;
  range_bar: string;
  gesundheit_link_color: string;
  modal_text: string;
  pager_background: string;
  pager_border: string;
  pager_dot_active: string;
  pager_dot_inactive: string;
}

export interface IconType {
  back: string;
  settings: string;
  right_arrow: string;
  disabled_switch: string;
  enabled_switch: string;
  play_button: string;
  pause_button: string;
  bottom_bar_left: string;
  bottom_bar_right: string;
  checkbox_selected: string;
  checkbox_unselected: string;
  radiobutton_selected: string;
  radiobutton_unselected: string;
  session_finish: string;
  info: string;
  badges: string[];
  close: string;
}

export interface ImageSize {
  width: string;
  height: string;
}

export interface SizesType {
  back: ImageSize;
  settings: ImageSize;
  right_arrow: ImageSize;
  disabled_switch: ImageSize;
  enabled_switch: ImageSize;
  play_button: ImageSize;
  pause_button: ImageSize;
  bottom_bar_buttons: ImageSize;
  session_finish: ImageSize;
}
export const ImageSizes: SizesType = {
  back: { width: '24px', height: '24px' },
  settings: { width: '24px', height: '24px' },
  right_arrow: { width: '22px', height: '18px' },
  disabled_switch: { width: '52px', height: '32px' },
  enabled_switch: { width: '52px', height: '32px' },
  play_button: { width: '45px', height: '45px' },
  pause_button: { width: '45px', height: '45px' },
  bottom_bar_buttons: { width: '35px', height: '35px' },
  session_finish: { width: '160px', height: '160px' },
};

export interface ThemeValuesType {
  name: string;
  colors: ColorType;
  icons: IconType;
}

export interface ThemeType {
  light: ThemeValuesType;
  dark: ThemeValuesType;
}

export interface ColorThemeType {
  pinkTheme: ThemeType
  purpleTheme: ThemeType
  greenTheme: ThemeType
  yellowTheme: ThemeType
  blueTheme: ThemeType
  greyTheme: ThemeType
}

const Themes: ColorThemeType = {
  pinkTheme: ThemesVersionPink,
  purpleTheme: ThemesVersionPurple,
  greenTheme: ThemesVersionGreen,
  yellowTheme: ThemesVersionYellow,
  blueTheme: ThemesVersionBlue,
  greyTheme: ThemesVersionGrey
}


export const ThemeContext = createContext(Themes.yellowTheme.light);
export const FontContext = createContext(Fonts.regular);
export const ImageSizesContext = createContext(ImageSizes);

export default Themes;
