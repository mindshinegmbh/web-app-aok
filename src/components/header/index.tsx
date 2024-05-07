import React from 'react';
import { HeaderParent } from './styles';
import Back from '../back';
import CustomLink from 'components/custom_link';
import { useBaseProps } from 'hocs/base_component';

export interface HeaderProps {
  isSettingsVisible: boolean;
}

const Header = ({ isSettingsVisible }: HeaderProps) => {
  const {currentTheme , currentSizes } = useBaseProps()
  
  return (
    <HeaderParent>
      <Back />
      <CustomLink
        width={currentSizes.settings.width}
        height={currentSizes.settings.height}
        show={isSettingsVisible}
        data-testId='settings_link'
        link={currentTheme.icons.settings}
        href={'/settings'}
        alt={"setting link"}
      />
    </HeaderParent>
  );
};

export default Header;
