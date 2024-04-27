import { useTranslation } from 'react-i18next';
import { FontContext, ImageSizesContext, ThemeContext } from '../styling/themes';
import { useContext } from 'react';
import { useAppDispatch } from 'localredux/hooks';

export function useBaseProps() {
  const currentTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const currentFont = useContext(FontContext);
  const currentSizes = useContext(ImageSizesContext);
  const { t } = useTranslation();
  

  return { currentTheme, currentFont, dispatch , t  , currentSizes};
}
