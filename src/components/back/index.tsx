import React, { MouseEvent } from 'react';
import { BackParent, MainParent, TextParent } from './styles';
import { RegularText } from '../../styling/common';
import Icon from '../icon';
import { useLink } from 'react-aria';
import { useNavigate } from 'react-router-dom';
import { useBaseProps } from 'hocs/base_component';
import {
  buttonAnimationHover,
  buttonAnimationTap,
  buttonAnimationTransition,
} from 'utils/constants';

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
    <MainParent
      whileHover={buttonAnimationHover}
      whileTap={buttonAnimationTap}
      transition={buttonAnimationTransition}
    >
      <BackParent ref={ref} {...linkProps} href='#' onClick={(e: MouseEvent) => goBack(e)}>
        <Icon
          width={currentSizes.back.width}
          height={currentSizes.back.height}
          alt='back button'
          link={currentTheme.icons.back}
        />
        <TextParent>
          <RegularText
            $textSize={currentFont.regular_font_size}
            $textColor={currentTheme.colors.settings_text_color}
          >
            {t('header.back')}
          </RegularText>
        </TextParent>
      </BackParent>
    </MainParent>
  );
};

export default Back;
