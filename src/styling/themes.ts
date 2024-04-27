import { createContext } from 'react';
import Colors from './color';
import {
  back_dark,
  back_light,
  settings_light,
  right_arrow_dark,
  right_arrow_light,
  disabled_switch_dark,
  disabled_switch_light,
  enabled_switch_dark,
  enabled_switch_light,
  play_light,
  pause_light,
  pause_dark,
  play_dark,
} from '../images';

export const DARK = 'dark';
export const LIGHT = 'light';
export const FONT_LARGE = 'large';
export const FONT_REGULAR = 'regular';

interface FontSizes {
  name: string;
  regular_font_size: string;
  xsmall_font_size: string;
  xsmall_font_weight: string;
}

interface FontVersion {
  large: FontSizes;
  regular: FontSizes;
}

export const Fonts: FontVersion = {
  large: {
    name: FONT_LARGE,
    regular_font_size: '20px',
    xsmall_font_size: '14px',
    xsmall_font_weight: '700',
  },
  regular: {
    name: FONT_REGULAR,
    regular_font_size: '17px',
    xsmall_font_size: '8px',
    xsmall_font_weight: '400',
  },
};
interface ColorType {
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
  progress_bar_color: string
  uncompleted_bar_color: string
}

export interface IconType {
  back: string;
  settings: string;
  right_arrow: string;
  disabled_switch: string;
  enabled_switch: string;
  play_button: string;
  pause_button: string;
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
}
export const ImageSizes: SizesType = {
  back: { width: '24px', height: '24px' },
  settings: { width: '24px', height: '24px' },
  right_arrow: { width: '22px', height: '18px' },
  disabled_switch: { width: '52px', height: '32px' },
  enabled_switch: { width: '52px', height: '32px' },
  play_button: { width: '45px', height: '45px' },
  pause_button: { width: '45px', height: '45px' },
};

export interface ThemeValuesType {
  name: string;
  colors: ColorType;
  icons: IconType;
}

interface ThemeType {
  light: ThemeValuesType;
  dark: ThemeValuesType;
}

const Themes: ThemeType = {
  light: {
    name: LIGHT,
    colors: {
      screen_background: Colors.green_shade_0,
      element_background: Colors.white_shade_0,
      primary_text_color: Colors.white_shade_0,
      secondary_text_color: Colors.grey_shade_0,
      settings_text_color: Colors.green_shade_3,
      header_text_color: Colors.green_shade_1,
      settings_button_color: Colors.green_shade_4,
      audio_player_background: Colors.white_shade_0,
      forward_backward_background: Colors.white_shade_0,
      forward_backward_bordercolor: Colors.green_shade_0,
      audio_player_text_color: Colors.green_shade_0,
      progress_bar_color: Colors.green_shade_0,
      uncompleted_bar_color: Colors.grey_shade_1
    },
    icons: {
      back: back_light,
      settings: settings_light,
      right_arrow: right_arrow_light,
      disabled_switch: disabled_switch_light,
      enabled_switch: enabled_switch_light,
      play_button: play_light,
      pause_button: pause_light,
    },
  },
  dark: {
    name: DARK,
    colors: {
      screen_background: Colors.black_shade_0,
      element_background: Colors.white_shade_0,
      primary_text_color: Colors.white_shade_0,
      secondary_text_color: Colors.grey_shade_0,
      settings_text_color: Colors.green_shade_3,
      header_text_color: Colors.green_shade_1,
      settings_button_color: Colors.green_shade_4,
      audio_player_background: Colors.green_shade_5_opaque,
      forward_backward_background: Colors.green_shade_5_opaque,
      forward_backward_bordercolor: Colors.green_shade_4,
      audio_player_text_color: Colors.green_shade_4,
      progress_bar_color: Colors.green_shade_4,
      uncompleted_bar_color: Colors.grey_shade_1
    },
    icons: {
      back: back_dark,
      settings: settings_light,
      right_arrow: right_arrow_dark,
      disabled_switch: disabled_switch_dark,
      enabled_switch: enabled_switch_dark,
      pause_button: pause_dark,
      play_button: play_dark,
    },
  },
};

export const ThemeContext = createContext(Themes.light);
export const FontContext = createContext(Fonts.regular);
export const ImageSizesContext = createContext(ImageSizes);

export default Themes;
