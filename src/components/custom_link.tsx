import React from 'react';
import { CustomATag, RegularIcon } from '../styling/common';

export interface CustomLinkProps {
  link: string;
  href: string;
  show?: boolean;
  alt: string;
}

const CustomLink = ({alt, href, link, show = true }: CustomLinkProps) => {
  if (!show) return null;
  return (
    <CustomATag href={href}>
      <RegularIcon alt={alt} src={link} />
    </CustomATag>
  );
};

export default CustomLink;
