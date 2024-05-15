import React, { useState, MouseEvent } from 'react';
import { CustomATag, LargeText, SmallText } from '../../styling/common';
import withBase from 'hocs/base_page';
import { useBaseProps } from 'hocs/base_component';
import {
  BodyTextParent,
  ButtonParent,
  FeedbackBarParent,
  FeedbackParent,
  FeedbackTextParent,
  FensterParent,
  IconParent,
  SessionFinishParent,
} from './styles';
import Icon from 'components/icon';
import CustomTextArea from 'components/custom_textarea';
import CustomButton from 'components/custom_button';
import RangeBar from 'components/range_bar';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  EnterAnimationO,
  ExitAnimationO,
  InitialAnimationO,
  buttonAnimationHover,
  buttonAnimationTap,
  buttonAnimationTransition,
} from 'utils/constants';

function SessionFinish() {
  const { currentFont, currentTheme, t, currentSizes } = useBaseProps();
  const [range, setRange] = useState(0);
  const [showFenster, setShowFenster] = useState(false);
  const navigate = useNavigate();

  const onClickFenster = (e: MouseEvent) => {
    e.preventDefault();
    setShowFenster(!showFenster);
  };

  return (
    <SessionFinishParent $backgroundColor={currentTheme.colors.screen_background}>
      <AnimatePresence>
        <LargeText
          $textSize={currentFont.large_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('session_finish.heading')}
        </LargeText>
        <IconParent>
          <Icon
            link={currentTheme.icons.session_finish}
            alt={'success image session finish'}
            width={currentSizes.session_finish.width}
            height={currentSizes.session_finish.height}
          />
        </IconParent>
        <BodyTextParent>
          <SmallText
            $textSize={currentFont.small_font}
            $textColor={currentTheme.colors.all_white_color}
          >
            {t('session_finish.body')}
          </SmallText>
        </BodyTextParent>
        <FeedbackBarParent>
          <RangeBar defaultRange={range} setRange={setRange}></RangeBar>
          <FeedbackTextParent>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('session_finish.bad')}
            </SmallText>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('session_finish.ok')}
            </SmallText>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('session_finish.sehr_gut')}
            </SmallText>
          </FeedbackTextParent>
        </FeedbackBarParent>
        <FensterParent
          whileHover={buttonAnimationHover}
          whileTap={buttonAnimationTap}
          transition={buttonAnimationTransition}
          $decorationColor={currentTheme.colors.all_white_color}
        >
          <CustomATag href='#' onClick={(e: MouseEvent) => onClickFenster(e)}>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t(showFenster ? 'session_finish.open' : 'session_finish.close')}
            </SmallText>
          </CustomATag>
        </FensterParent>

        {!showFenster && (
          <FeedbackParent
            initial={InitialAnimationO}
            animate={EnterAnimationO}
            exit={ExitAnimationO}
            $showFenster={showFenster}
          >
            <CustomTextArea placeholder={t('session_finish.feedback')} />
          </FeedbackParent>
        )}

        <ButtonParent>
          <CustomButton
            onClick={() => navigate('/mental_gesundheit')}
            text={t('session_finish.button')}
          />
        </ButtonParent>
      </AnimatePresence>
    </SessionFinishParent>
  );
}

export default withBase(SessionFinish);
