import React, { useRef, useState } from 'react';
import {
  AudioPlayerComponents,
  AudioPlayerProgress,
  BackgroundAudioPlayer,
  Circle,
  ProgressTextParent,
} from './styles';
import { CustomATag, XSmallText } from '../../styling/common';
import { useBaseProps } from 'hocs/base_component';
import CustomLink from 'components/custom_link';
import Progress from 'components/custom_progress';
import { formatTimeForAudio } from 'utils/general_utils';
import { FONT_LARGE } from 'styling/themes';
import {
  EnterAnimationS,
  EnterAnimationY,
  ExitAnimationS,
  ExitAnimationY,
  InitialAnimationS,
  InitialAnimationY,
  buttonAnimationHoverCircle,
  buttonAnimationTap,
  buttonAnimationTransition,
  transitionStandard,
  transitionTop,
} from 'utils/constants';
import { motion } from 'framer-motion';

const FORWARD_BACKWARD_TIME = 15;

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer = ({ url }: AudioPlayerProps) => {
  const { currentTheme, t, currentFont, currentSizes } = useBaseProps();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
  const [audioProgress, setAudioProgres] = useState(0);
  const [duration, setDuration] = useState(0);

  const playOrPauseAudio = () => {
    if (play) {
      audioRef?.current?.pause();
      setPlay(false);
    } else {
      audioRef?.current?.play();
      setPlay(true);
    }
  };

  const updateAudioProgress = () => {
    setAudioProgres(audioRef?.current?.currentTime ?? 0);
  };

  const forwardAudio = () => {
    const reference = audioRef?.current;
    if (reference) {
      reference.currentTime += FORWARD_BACKWARD_TIME;
    }
  };

  const setMetaData = () => {
    setDuration(audioRef?.current?.duration ?? 0);
  };

  const backwardAudio = () => {
    const reference = audioRef?.current;
    if (reference) {
      reference.currentTime -= FORWARD_BACKWARD_TIME;
    }
  };

  return (
    <BackgroundAudioPlayer
      initial={InitialAnimationY}
      animate={EnterAnimationY}
      exit={ExitAnimationY}
      $backgroundColor={currentTheme.colors.audio_player_background}
      transition={transitionTop}
    >
      <AudioPlayerComponents>
        <CustomATag
          initial={InitialAnimationS}
          animate={EnterAnimationS}
          exit={ExitAnimationS}
          href='#'
          onClick={backwardAudio}
          transition={transitionStandard}
        >
          <Circle
            $isLarge={currentFont.name === FONT_LARGE}
            $backgroundColor={currentTheme.colors.forward_backward_background}
            $borderColor={currentTheme.colors.forward_backward_bordercolor}
            whileHover={buttonAnimationHoverCircle}
            whileTap={buttonAnimationTap}
            transition={buttonAnimationTransition}
          >
            <XSmallText
              $textSize={currentFont.xsmall_font_size}
              $textWeight={currentFont.xsmall_font_weight}
              $textColor={currentTheme.colors.audio_player_text_color}
            >
              {t('audio_player.backward_text')}
            </XSmallText>
          </Circle>
        </CustomATag>
        <motion.div
          whileHover={buttonAnimationHoverCircle}
          whileTap={buttonAnimationTap}
          transition={buttonAnimationTransition}
        >
          <CustomLink
            onCustomPress={playOrPauseAudio}
            width={currentSizes.play_button.width}
            height={currentSizes.play_button.height}
            href='#'
            link={play ? currentTheme.icons.pause_button : currentTheme.icons.play_button}
            alt={'play'}
          />
          <audio
            onLoadedMetadata={setMetaData}
            onTimeUpdate={updateAudioProgress}
            src={url}
            ref={audioRef}
          />
        </motion.div>
        <CustomATag
          initial={InitialAnimationS}
          animate={EnterAnimationS}
          exit={ExitAnimationS}
          href='#'
          onClick={forwardAudio}
          transition={transitionStandard}
        >
          <Circle
            $isLarge={currentFont.name === FONT_LARGE}
            $backgroundColor={currentTheme.colors.forward_backward_background}
            $borderColor={currentTheme.colors.forward_backward_bordercolor}
            whileHover={buttonAnimationHoverCircle}
            whileTap={buttonAnimationTap}
            transition={buttonAnimationTransition}
          >
            <XSmallText
              $textSize={currentFont.xsmall_font_size}
              $textWeight={currentFont.xsmall_font_weight}
              $textColor={currentTheme.colors.audio_player_text_color}
            >
              {t('audio_player.forward_text')}
            </XSmallText>
          </Circle>
        </CustomATag>
      </AudioPlayerComponents>
      <AudioPlayerProgress
        initial={InitialAnimationS}
        animate={EnterAnimationS}
        transition={transitionStandard}
        exit={ExitAnimationS}
      >
        <Progress
          unCompletedColor={currentTheme.colors.uncompleted_bar_color}
          color={currentTheme.colors.progress_bar_color}
          max={audioRef.current ? audioRef.current.duration : 0}
          value={audioProgress}
        />
        <ProgressTextParent>
          <XSmallText
            $textSize={currentFont.xsmall_font_size}
            $textWeight={currentFont.xsmall_font_weight}
            $textColor={currentTheme.colors.audio_player_text_color}
          >
            {t('audio_player.progress_text', {
              remaining: formatTimeForAudio(audioProgress),
              out: formatTimeForAudio(duration),
            })}
          </XSmallText>
        </ProgressTextParent>
      </AudioPlayerProgress>
    </BackgroundAudioPlayer>
  );
};

export default AudioPlayer;
