import React, { useContext, useEffect } from 'react';
import { HeaderParent } from './styles';
import { RegularText } from '../../styling/common';
import { useTranslation } from 'react-i18next';
import Themes, { DARK, ThemeContext } from '../../styling/themes';
import { useAppDispatch } from '../../redux/hooks';
import { setTheme } from '../../redux/theme';

export interface HeaderProps {
  isSettingsVisible: boolean;
}

const Header = ({ isSettingsVisible }: HeaderProps) => {
  const { t } = useTranslation();
  const currentTheme = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //  setTimeout(()=> {
    //     dispatch(setTheme(DARK))
    //  }, 5000)
  }, []);

  return (
    <HeaderParent>
      <RegularText $textColor={currentTheme.settings_text_color}>{t('header.back')}</RegularText>
      <div>Settings</div>
    </HeaderParent>
  );
};

export default Header;
