import React, { useEffect, useRef, useState } from 'react';
import {
  AudioPlayerComponents,
  AudioPlayerProgress,
  BackgroundAudioPlayer,
  Circle,
} from './styles';
import { CustomATag, XSmallText } from '../../styling/common';
import { useBaseProps } from 'hocs/base_component';
import CustomLink from 'components/custom_link';
import Progress from 'components/custom_progress';
import { formatTimeForAudio } from 'utils/general_utils';

const FORWARD_BACKWARD_TIME = 15;

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer = ({ url }: AudioPlayerProps) => {
  const { currentTheme, t, currentFont, currentSizes } = useBaseProps();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
  const [audioProgress, setAudioProgres] = useState(0)
  const [duration , setDuration] = useState(0)
  

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
    setAudioProgres(audioRef?.current?.currentTime ?? 0 );
  };

  const forwardAudio = () => {
    const reference = audioRef?.current;
    if (reference) {
      reference.currentTime += FORWARD_BACKWARD_TIME;
    }
  };


  const setMetaData = () => {
     setDuration(audioRef?.current?.duration ?? 0)
  }

  const backwardAudio = () => {
    const reference = audioRef?.current;
    if (reference) {
      reference.currentTime -= FORWARD_BACKWARD_TIME;
    }
  };

  return (
    <BackgroundAudioPlayer $backgroundColor={currentTheme.colors.audio_player_background}>
      <AudioPlayerComponents>
        <CustomATag href='#' onClick={backwardAudio}>
          <Circle
            $backgroundColor={currentTheme.colors.forward_backward_background}
            $borderColor={currentTheme.colors.forward_backward_bordercolor}
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
        <>
          <CustomLink
            onCustomPress={playOrPauseAudio}
            width={currentSizes.play_button.width}
            height={currentSizes.play_button.height}
            href='#'
            link={play ? currentTheme.icons.pause_button : currentTheme.icons.play_button}
            alt={'play'}
          />
          <audio onLoadedMetadata={setMetaData} onTimeUpdate={updateAudioProgress} src={url} ref={audioRef} />
        </>
        <CustomATag href='#' onClick={forwardAudio}>
          <Circle
            $backgroundColor={currentTheme.colors.forward_backward_background}
            $borderColor={currentTheme.colors.forward_backward_bordercolor}
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
      <AudioPlayerProgress>
        <Progress
          unCompletedColor={currentTheme.colors.uncompleted_bar_color}
          color={currentTheme.colors.progress_bar_color}
          max={audioRef.current ? audioRef.current.duration : 0}
          value={audioProgress}
        />
        <XSmallText
          $textSize={currentFont.xsmall_font_size}
          $textWeight={currentFont.xsmall_font_weight}
          $textColor={currentTheme.colors.audio_player_text_color}
        >
          {t('audio_player.progress_text', {remaining: formatTimeForAudio(audioProgress), out: formatTimeForAudio(duration)})}
        </XSmallText>
      </AudioPlayerProgress>
    </BackgroundAudioPlayer>
  );
};

export default AudioPlayer;
