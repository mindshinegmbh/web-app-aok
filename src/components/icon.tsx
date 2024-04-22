import React from 'react';
import { RegularIcon } from '../styling/common';

export interface IconProps {
  link: string;
  alt: string;
}

const Icon = ({ link, alt }: IconProps) => {
  return <RegularIcon alt={alt} src={link} />;
};

export default Icon;
