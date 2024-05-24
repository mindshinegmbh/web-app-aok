import React from 'react';
import { Divider, HeaderParent, MainParent, SettingsIconParent } from './styles';
import Back from '../back';
import CustomLink from 'components/custom_link';
import { useBaseProps } from 'hocs/base_component';
import { AnimatePresence } from 'framer-motion';
import {
  EnterAnimationY,
  ExitAnimationY,
  InitialAnimationY,
  buttonAnimationHover,
  buttonAnimationTap,
  buttonAnimationTransition,
} from 'utils/constants';
import { useNavigate } from 'react-router-dom';
import { sendCustomEvent } from 'utils/analytics';
import { GA4Category, GA4Event } from 'utils/custom_events';

export interface HeaderProps {
  isSettingsVisible: boolean;
}

const Header = ({ isSettingsVisible }: HeaderProps) => {
  const { currentTheme, currentSizes } = useBaseProps();
  const navigate = useNavigate();

  const onSettingsClick = () => {
    navigate('/settings');
    sendCustomEvent(GA4Category.settings, GA4Event.settings_click);
  };
  return (
    <AnimatePresence>
      <MainParent
        role='navigation'
        aria-roledescription='use this to naviagte back and to settings screen'
      >
        <HeaderParent initial={InitialAnimationY} animate={EnterAnimationY} exit={ExitAnimationY}>
          <Back />
          <SettingsIconParent
            whileHover={buttonAnimationHover}
            whileTap={buttonAnimationTap}
            transition={buttonAnimationTransition}
          >
            <CustomLink
              width={currentSizes.settings.width}
              height={currentSizes.settings.height}
              show={isSettingsVisible}
              data-testId='settings_link'
              link={currentTheme.icons.settings}
              onCustomPress={onSettingsClick}
              href='#'
              alt={'setting link'}
            />
          </SettingsIconParent>
        </HeaderParent>
        <Divider $backgroundColor={currentTheme.colors.all_white_color} />
      </MainParent>
    </AnimatePresence>
  );
};

export default Header;
