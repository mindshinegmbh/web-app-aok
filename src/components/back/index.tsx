import React, { MouseEvent } from 'react';
import { BackParent } from './styles';
import { RegularText } from '../../styling/common';
import Icon from '../icon';
import { useLink } from 'react-aria';
import { useNavigate } from 'react-router-dom';
import { useBaseProps } from 'hocs/base_component';

const Back = () => {
  const { t, currentFont, currentSizes, currentTheme } = useBaseProps();
  const ref = React.useRef(null);
  const { linkProps } = useLink({}, ref);
  const navigate = useNavigate();

  const goBack = (e: MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <BackParent ref={ref} {...linkProps} href='#' onClick={(e: MouseEvent) => goBack(e)}>
      <Icon
        width={currentSizes.back.width}
        height={currentSizes.back.height}
        alt='back button'
        link={currentTheme.icons.back}
      />
      <RegularText
        $textSize={currentFont.regular_font_size}
        $textColor={currentTheme.colors.settings_text_color}
      >
        {t('header.back')}
      </RegularText>
    </BackParent>
  );
};

export default Back;
