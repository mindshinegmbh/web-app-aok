import React, { useContext, useEffect } from 'react';
import { HeaderParent } from './styles';
import { ThemeContext } from '../../styling/themes';
import Back from '../back';
import CustomLink from 'components/CustomLink';

export interface HeaderProps {
  isSettingsVisible: boolean;
}

const Header = ({ isSettingsVisible }: HeaderProps) => {
  const currentTheme = useContext(ThemeContext);
  //const dispatch = useAppDispatch();

  useEffect(() => {
    //  setTimeout(()=> {
    //     dispatch(setTheme(DARK))
    //  }, 5000)
    console.log(isSettingsVisible);
  });

  return (
    <HeaderParent>
      <Back />
      <CustomLink
        hide={isSettingsVisible}
        data-cy='settings_link'
        link={currentTheme.icons.settings}
        href={'/settings'}
      />
    </HeaderParent>
  );
};

export default Header;
