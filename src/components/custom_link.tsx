import React from 'react';
import { CustomATag, RegularIcon } from '../styling/common';

export interface CustomLinkProps {
  link: string;
  href: string;
  show?: boolean;
  alt: string;
  width: string;
  height: string;
}

const CustomLink = ({alt, href, link, show = true, width, height }: CustomLinkProps) => {
  if (!show) return null;
  return (
    <CustomATag href={href}>
      <RegularIcon width={width} height={height} alt={alt} src={link} />
    </CustomATag>
  );
};

export default CustomLink;
