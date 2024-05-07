import React from 'react';
import { RegularIcon } from '../styling/common';

export interface IconProps {
  link: string;
  alt: string;
  width: string;
  height: string;
}

const Icon = ({ link, alt, width, height }: IconProps) => {
  return <RegularIcon width={width} height={height} alt={alt} src={link} />;
};

export default Icon;
