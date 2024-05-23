import React from 'react';
import { BottomBarParent } from './styles';
import { useBaseProps } from 'hocs/base_component';
import Icon from 'components/icon';
import { CustomATag } from 'styling/common';
import {
  EnterAnimationYD,
  ExitAnimationYD,
  InitialAnimationYD,
} from 'utils/constants';

export interface BottomBarProps {
  letfOnClick: () => void;
  rightOnClick: () => void;
}

const BottomBar = ({ letfOnClick, rightOnClick }: BottomBarProps) => {
  const { currentTheme, currentSizes } = useBaseProps();

  return (
    <BottomBarParent aria-roledescription='use this to naviagte between cards' role='navigation' initial={InitialAnimationYD} animate={EnterAnimationYD} exit={ExitAnimationYD}>
      <CustomATag href='#' onClick={letfOnClick}>
        <Icon
          width={currentSizes.back.width}
          height={currentSizes.back.height}
          alt='left button'
          link={currentTheme.icons.bottom_bar_left}
        />
      </CustomATag>
      <CustomATag href='#' onClick={rightOnClick}>
        <Icon
          width={currentSizes.back.width}
          height={currentSizes.back.height}
          alt='right button'
          link={currentTheme.icons.bottom_bar_right}
        />
      </CustomATag>
    </BottomBarParent>
  );
};

export default BottomBar;
