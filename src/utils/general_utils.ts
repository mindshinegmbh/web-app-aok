import Themes, { DARK, FONT_LARGE, FONT_REGULAR, Fonts, LIGHT } from '../styling/themes';

export const getThemeColor = (color: number) => {
  switch (color) {
    case 1:
      return Themes.blueTheme;
    case 2:
      return Themes.yellowTheme;
    case 3:
      return Themes.purpleTheme;
    case 4:
      return Themes.greyTheme;
    case 4:
      return Themes.pinkTheme;
    default:
      return Themes.greenTheme;
  }
};

export const getThemeObjectAgaisntString = (theme: string, color: number) => {
  if (theme === LIGHT) return getThemeColor(color).light;
  if (theme === DARK) return getThemeColor(color).dark;

  return getThemeColor(color).light;
};

export const getFontObjectAgaisntString = (font: string) => {
  if (font === FONT_REGULAR) return Fonts.regular;
  if (font === FONT_LARGE) return Fonts.large;

  return Fonts.regular;
};

export const formatTimeForAudio = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}m${String(seconds).padStart(2, '0')}s`;
};
