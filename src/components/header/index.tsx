import React, { useContext, useEffect } from 'react';
import { HeaderParent } from './styles';
import { ThemeContext } from '../../styling/themes';
import Back from '../back';
import CustomLink from 'components/custom_link';

export interface HeaderProps {
  isSettingsVisible: boolean;
}

const Header = ({ isSettingsVisible }: HeaderProps) => {
  const currentTheme = useContext(ThemeContext);
  
  return (
    <HeaderParent>
      <Back />
      <CustomLink
        show={isSettingsVisible}
        data-cy='settings_link'
        link={currentTheme.icons.settings}
        href={'/settings'}
        alt={"setting link"}
      />
    </HeaderParent>
  );
};

export default Header;
