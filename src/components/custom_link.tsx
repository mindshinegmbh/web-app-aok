import React, { MouseEvent } from 'react';
import { CustomATag, RegularIcon } from '../styling/common';
import {
  InitialAnimationS,
  EnterAnimationS,
  ExitAnimationS,
  buttonAnimationTransition,
} from 'utils/constants';

type onClickFunction = () => void;
export interface CustomLinkProps {
  link: string;
  href: string;
  show?: boolean;
  alt: string;
  width: string;
  height: string;
  onCustomPress?: onClickFunction | null;
}

const CustomLink = ({
  alt,
  href,
  link,
  show = true,
  width,
  height,
  onCustomPress = null,
}: CustomLinkProps) => {
  if (!show) return null;
  const onCustomClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onCustomPress) {
      onCustomPress();
    }
  };

  if (onCustomPress) {
    return (
      <CustomATag
        initial={InitialAnimationS}
        animate={EnterAnimationS}
        exit={ExitAnimationS}
        href={href}
        onClick={(e: MouseEvent) => onCustomClick(e)}
        transition={buttonAnimationTransition}
        
      >
        <RegularIcon width={width} height={height} alt={alt} src={link} />
      </CustomATag>
    );
  }

  return (
    <CustomATag
      initial={InitialAnimationS}
      animate={EnterAnimationS}
      exit={ExitAnimationS}
      transition={buttonAnimationTransition}
      href={href}
    >
      <RegularIcon width={width} height={height} alt={alt} src={link} />
    </CustomATag>
  );
};

export default CustomLink;
