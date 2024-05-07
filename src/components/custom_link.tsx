import React, { MouseEvent } from 'react';
import { CustomATag, RegularIcon } from '../styling/common';

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
      <CustomATag href={href} onClick={(e: MouseEvent) => onCustomClick(e)}>
        <RegularIcon width={width} height={height} alt={alt} src={link} />
      </CustomATag>
    );
  }

  return (
    <CustomATag href={href}>
      <RegularIcon width={width} height={height} alt={alt} src={link} />
    </CustomATag>
  );
};

export default CustomLink;
