import React from 'react';
import { RegularIcon } from '../styling/common';

export interface IconProps {
  link: string;
}

const Icon = ({ link }: IconProps) => {
  return <RegularIcon src={link} />;
};

export default Icon;
