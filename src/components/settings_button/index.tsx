import React, { useContext, useRef } from 'react';
import { SettingButtonParent } from './styles';
import { FontContext, ThemeContext } from '../../styling/themes';
import { RegularText } from 'styling/common';
import Icon from 'components/icon';
import { useTranslation } from 'react-i18next';
import { useButton } from 'react-aria';

export interface SettingsButtonProps {
  image: string;
  text: string;
  alt: string;
  onClick: () => void
}

const SettingsButton = (props: SettingsButtonProps) => {
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext)
  const { t } = useTranslation();
  let ref = useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton({}, ref);
  let { image, text , alt, onClick } = props;
  
  return (
    <SettingButtonParent {...buttonProps} ref={ref} onClick={onClick}>
      <RegularText $textSize={currentFont.regular_font_size} $textColor={currentTheme.colors.settings_button_color}>{t(text)}</RegularText>
      <Icon alt={alt} link={image} />
    </SettingButtonParent>
  );
};

export default SettingsButton;
