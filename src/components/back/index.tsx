import React, { useContext } from 'react';
import { BackParent } from './styles';
import { RegularText } from '../../styling/common';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../styling/themes';
import Icon from '../icon';
import {useLink} from 'react-aria'


const Back = () => {
  const { t } = useTranslation();
  const currentTheme = useContext(ThemeContext);
  let ref = React.useRef(null);
  let { linkProps } = useLink({}, ref);

  return (
    <BackParent
      ref={ref}
     {...linkProps}
      href='#'
    >
      <Icon link={currentTheme.icons.back} />
      <RegularText $textColor={currentTheme.colors.settings_text_color}>
        {t('header.back')}
      </RegularText>
    </BackParent>
  );
};

export default Back;
