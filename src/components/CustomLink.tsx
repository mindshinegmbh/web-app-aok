import React from 'react';
import { CustomATag, RegularIcon } from '../styling/common';

export interface CustomLinkProps {
  link: string;
  href: string;
}

const CustomLink = ({ href, link }: CustomLinkProps) => {
  return <CustomATag href={href}>
  <RegularIcon src={link} />
   </CustomATag>
  
  
};

export default CustomLink