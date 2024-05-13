import Themes, { DARK, FONT_LARGE, FONT_REGULAR, Fonts, LIGHT } from '../styling/themes';

export const getThemeObjectAgaisntString = (theme: string) => {
  if (theme === LIGHT) return Themes.light;
  if (theme === DARK) return Themes.dark;

  return Themes.light;
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
