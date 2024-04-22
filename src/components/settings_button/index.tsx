import React, { useContext, useRef, MouseEvent } from 'react';
import { SettingButtonParent } from './styles';
import { FontContext, ThemeContext } from '../../styling/themes';
import { RegularText } from 'styling/common';
import Icon from 'components/icon';
import { useTranslation } from 'react-i18next';
import {useLink} from 'react-aria'

export interface SettingsButtonProps {
  image: string;
  text: string;
  alt: string;
  onClick: () => void;
  testid: string;
}

const SettingsButton = (props: SettingsButtonProps) => {
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext)
  const { t } = useTranslation();
  const ref = useRef(null);
  const { linkProps } = useLink({}, ref);
  const { image, text , alt, onClick } = props;

  const onClickCustom = (e: MouseEvent) => {
     e.preventDefault()
     onClick()
  }
  
  return (
    <SettingButtonParent href='#' {...linkProps} ref={ref} onClick={onClickCustom}>
      <RegularText data-testid={props.testid} $textSize={currentFont.regular_font_size} $textColor={currentTheme.colors.settings_button_color}>{t(text)}</RegularText>
      <Icon alt={alt} link={image} />
    </SettingButtonParent>
  );
};

export default SettingsButton;
