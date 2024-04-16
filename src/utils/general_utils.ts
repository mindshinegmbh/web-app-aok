import Themes, { DARK, LIGHT } from '../styling/themes';

export const getThemeObjectAgaisntString = (theme: string) => {
  if (theme === LIGHT) return Themes.light;
  if (theme === DARK) return Themes.dark;

  return Themes.light;
};
