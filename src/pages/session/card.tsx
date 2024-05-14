import React from 'react';
import { Card } from 'models/session_type';
import { LargeText, SmallText } from 'styling/common';
import { BodyTextParent, CardParent, CenterTextParent, UlParent } from './styles';
import AudioPlayer from 'components/audio_player';
import { useBaseProps } from 'hocs/base_component';
import InputsComponent from './inputs';
import { AnimatePresence, motion } from 'framer-motion';
import {
  EnterAnimationO,
  ExitAnimationO,
  InitialAnimationO,
  liAnimation,
  transitionTop,
  ulAnimation,
} from 'utils/constants';

interface CardProps {
  card: Card;
}

const CardComponent = (props: CardProps) => {
  const { currentTheme, currentFont } = useBaseProps();

  return (
    <CardParent>
      <AnimatePresence>
        <AudioPlayer url={props.card.audio_url} />
        <CenterTextParent>
          <LargeText
            initial={InitialAnimationO}
            animate={EnterAnimationO}
            exit={ExitAnimationO}
            transition={transitionTop}
            $textSize={currentFont.large_font}
            $textColor={currentTheme.colors.all_white_color}
          >
            {props.card.title}
          </LargeText>
          <BodyTextParent>
            <SmallText
              initial={InitialAnimationO}
              animate={EnterAnimationO}
              exit={ExitAnimationO}
              transition={transitionTop}
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {props.card.body}
            </SmallText>
          </BodyTextParent>
          <UlParent
            variants={ulAnimation}
            initial='hidden'
            animate='show'
            $textColor={currentTheme.colors.all_white_color}
          >
            {props.card.bullet.map((bullet, index) => {
              return (
                <motion.li variants={liAnimation} key={index}>
                  <SmallText
                    $textSize={currentFont.small_font}
                    $textColor={currentTheme.colors.all_white_color}
                  >
                    {bullet}
                  </SmallText>
                </motion.li>
              );
            })}
          </UlParent>
          <InputsComponent
            inputType={props.card.inputType}
            inputs={['First', 'Second', 'Third', 'Fourth']}
          />
        </CenterTextParent>
      </AnimatePresence>
    </CardParent>
  );
};

export default CardComponent;
