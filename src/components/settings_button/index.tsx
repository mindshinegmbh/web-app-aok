import React, { useContext, useEffect } from 'react';
import { SettingButtonParent } from './styles';
import { ThemeContext } from '../../styling/themes';
import { RegularText } from 'styling/common';
import Icon from 'components/icon';
import { useTranslation } from 'react-i18next';

export interface SettingsButtonProps {
  image: string;
  text: string;
  alt: string
}

const SettingsButton = ({ image, text , alt }: SettingsButtonProps) => {
  const currentTheme = useContext(ThemeContext);
  const { t } = useTranslation();
  //const dispatch = useAppDispatch();

  useEffect(() => {
    //  setTimeout(()=> {
    //     dispatch(setTheme(DARK))
    //  }, 5000)
  });

  return (
    <SettingButtonParent>
      <RegularText $textColor={currentTheme.colors.settings_button_color}>{t(text)}</RegularText>
      <Icon alt={alt} link={image} />
    </SettingButtonParent>
  );
};

export default SettingsButton;
