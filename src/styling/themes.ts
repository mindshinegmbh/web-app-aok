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
  bottom_left_light,
  bottom_right_light,
  bottom_left_dark,
  bottom_right_dark,
  checkbox_selected_dark,
  checkbox_selected_light,
  checkbox_unselected_dark,
  checkbox_unselected_light,
  radiobutton_selected_dark,
  radiobutton_selected_light,
  radiobutton_unselected_dark,
  radiobutton_unselected_light,
  session_finish_dark,
  session_finish_light,
  info_dark,
  info_light,
  badge_1_dark,
  badge_1_light,
  badge_2_dark,
  badge_2_light,
  badge_3_dark,
  badge_3_light,
  badge_4_dark,
  badge_4_light,
  close_dark,
  close_light,
  settings_dark,
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
  small_font: string;
  large_font: string;
  xlarge_font: string;
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
      uncompleted_bar_color: Colors.grey_shade_1,
      all_white_color: Colors.white_shade_0,
      text_field_place_holder: Colors.green_shade_6,
      field_background_color: Colors.white_shade_0,
      button_background: Colors.green_shade_4,
      button_text: Colors.green_shade_6,
      range_bar: Colors.green_shade_4,
      gesundheit_link_color: Colors.green_shade_4,
      modal_text: Colors.green_shade_6,
    },
    icons: {
      back: back_light,
      settings: settings_light,
      right_arrow: right_arrow_light,
      disabled_switch: disabled_switch_light,
      enabled_switch: enabled_switch_light,
      play_button: play_light,
      pause_button: pause_light,
      bottom_bar_left: bottom_left_light,
      bottom_bar_right: bottom_right_light,
      checkbox_selected: checkbox_selected_light,
      checkbox_unselected: checkbox_unselected_light,
      radiobutton_selected: radiobutton_selected_light,
      radiobutton_unselected: radiobutton_unselected_light,
      session_finish: session_finish_light,
      info: info_light,
      badges: [badge_1_light, badge_2_light, badge_3_light, badge_4_light],
      close: close_light,
    },
  },
  dark: {
    name: DARK,
    colors: {
      screen_background: Colors.black_shade_0,
      element_background: Colors.white_shade_0,
      primary_text_color: Colors.white_shade_0,
      secondary_text_color: Colors.grey_shade_0,
      settings_text_color: Colors.green_shade_4,
      header_text_color: Colors.green_shade_1,
      settings_button_color: Colors.green_shade_4,
      audio_player_background: Colors.green_shade_5_opaque,
      forward_backward_background: Colors.green_shade_5_opaque,
      forward_backward_bordercolor: Colors.green_shade_4,
      audio_player_text_color: Colors.green_shade_4,
      progress_bar_color: Colors.green_shade_4,
      uncompleted_bar_color: Colors.grey_shade_1,
      all_white_color: Colors.white_shade_0,
      text_field_place_holder: Colors.green_shade_6,
      field_background_color: Colors.green_shade_5_opaque,
      button_background: Colors.green_shade_4,
      button_text: Colors.green_shade_6,
      range_bar: Colors.green_shade_4,
      gesundheit_link_color: Colors.green_shade_4,
      modal_text: Colors.green_shade_6,
    },
    icons: {
      back: back_dark,
      settings: settings_dark,
      right_arrow: right_arrow_dark,
      disabled_switch: disabled_switch_dark,
      enabled_switch: enabled_switch_dark,
      pause_button: pause_dark,
      play_button: play_dark,
      bottom_bar_left: bottom_left_dark,
      bottom_bar_right: bottom_right_dark,
      checkbox_selected: checkbox_selected_dark,
      checkbox_unselected: checkbox_unselected_dark,
      radiobutton_selected: radiobutton_selected_dark,
      radiobutton_unselected: radiobutton_unselected_dark,
      session_finish: session_finish_dark,
      info: info_dark,
      badges: [badge_1_dark, badge_2_dark, badge_3_dark, badge_4_dark],
      close: close_dark,
    },
  },
};

export const ThemeContext = createContext(Themes.light);
export const FontContext = createContext(Fonts.regular);
export const ImageSizesContext = createContext(ImageSizes);

export default Themes;
