import React, { useContext, useEffect } from 'react';
import { HeaderParent } from './styles';
import { RegularText } from '../../styling/common';
import { useTranslation } from 'react-i18next';
import Themes, { DARK, ThemeContext } from '../../styling/themes';
import { useAppDispatch } from '../../redux/hooks';
import { setTheme } from '../../redux/theme';
import Icon from '../icon';
import { BackParent } from '../back/styles';
import Back from '../back';

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
      <Back />
      <Icon link={currentTheme.icons.settings} />
    </HeaderParent>
  );
};

export default Header;
