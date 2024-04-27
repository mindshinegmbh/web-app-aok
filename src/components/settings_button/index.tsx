import React, { useRef, MouseEvent } from 'react';
import { SettingButtonParent } from './styles';
import { RegularText } from 'styling/common';
import Icon from 'components/icon';
import { useLink } from 'react-aria';
import { useBaseProps } from 'hocs/base_component';

export interface SettingsButtonProps {
  image: string;
  text: string;
  alt: string;
  onClick: () => void;
  testid: string;
}

const SettingsButton = (props: SettingsButtonProps) => {
  const { t, currentFont, currentSizes, currentTheme } = useBaseProps();
  const ref = useRef(null);
  const { linkProps } = useLink({}, ref);
  const { image, text, alt, onClick } = props;

  const onClickCustom = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <SettingButtonParent href='#' {...linkProps} ref={ref} onClick={onClickCustom}>
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
    </SettingButtonParent>
  );
};

export default SettingsButton;
