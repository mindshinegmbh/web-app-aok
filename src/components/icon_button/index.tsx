import React, { useRef, MouseEvent } from 'react';
import { IconButtonParent } from './styles';
import { RegularText } from 'styling/common';
import Icon from 'components/icon';
import { useLink } from 'react-aria';
import { useBaseProps } from 'hocs/base_component';

export interface IconButtonProps {
  image: string;
  text: string;
  alt: string;
  onClick: () => void;
  testid: string;
}

const IconButton = (props: IconButtonProps) => {
  const { t, currentFont, currentSizes, currentTheme } = useBaseProps();
  const ref = useRef(null);
  const { linkProps } = useLink({}, ref);
  const { image, text, alt, onClick } = props;

  const onClickCustom = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <IconButtonParent href='#' {...linkProps} ref={ref} onClick={onClickCustom}>
      <RegularText
        data-testid={props.testid}
        $textSize={currentFont.regular_font_size}
        $textColor={currentTheme.colors.settings_button_color}
      >
        {t(text)}
      </RegularText>
      <Icon
        width={currentSizes.settings.width}
        height={currentSizes.settings.height}
        alt={alt}
        link={image}
      />
    </IconButtonParent>
  );
};

export default IconButton;
