import React, { useContext, useEffect } from 'react';
import { HeaderParent } from './styles';
import  {ThemeContext } from '../../styling/themes';
import Icon from '../icon';
import Back from '../back';

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
    console.log(isSettingsVisible)
  }, );

  return (
    <HeaderParent>
      <Back />
      <Icon link={currentTheme.icons.settings} />
    </HeaderParent>
  );
};

export default Header;
