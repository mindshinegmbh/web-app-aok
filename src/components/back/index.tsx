import React, { useContext } from 'react';
import { BackParent } from './styles';
import { RegularText } from '../../styling/common';
import { useTranslation } from 'react-i18next';
import { FontContext, ThemeContext } from '../../styling/themes';
import Icon from '../icon';
import {useLink} from 'react-aria'


const Back = () => {
  const { t } = useTranslation();
  const currentTheme = useContext(ThemeContext);
  const currentFont = useContext(FontContext)
  const ref = React.useRef(null);
  const { linkProps } = useLink({}, ref);

  return (
    <BackParent
      ref={ref}
     {...linkProps}
      href='/settings'
    >
      <Icon alt="back button" link={currentTheme.icons.back} />
      <RegularText $textSize={currentFont.regular_font_size} $textColor={currentTheme.colors.settings_text_color}>
        {t('header.back')}
      </RegularText>
    </BackParent>
  );
};

export default Back;
