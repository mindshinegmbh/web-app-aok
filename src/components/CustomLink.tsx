import React from 'react';
import { CustomATag, RegularIcon } from '../styling/common';

export interface CustomLinkProps {
  link: string;
  href: string;
  hide?: boolean;
}

const CustomLink = ({ href, link, hide = false }: CustomLinkProps) => {
  if (hide) return null;
  return (
    <CustomATag href={href}>
      <RegularIcon src={link} />
    </CustomATag>
  );
};

export default CustomLink;
