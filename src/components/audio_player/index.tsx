import React from 'react';
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

const AudioPlayer = () => {
  const { currentTheme, t, currentFont, currentSizes } = useBaseProps();

  return (
    <BackgroundAudioPlayer $backgroundColor={currentTheme.colors.audio_player_background}>
      <AudioPlayerComponents>
        <CustomATag href='#'>
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
        <CustomLink
          width={currentSizes.play_button.width}
          height={currentSizes.play_button.height}
          href='#'
          link={currentTheme.icons.play_button}
          alt={'play'}
        />

        <CustomATag href='#'>
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
      </AudioPlayerComponents>
      <AudioPlayerProgress>
        <Progress
          unCompletedColor={currentTheme.colors.uncompleted_bar_color}
          color={currentTheme.colors.progress_bar_color}
          max={100}
          value={75}
        />
        <XSmallText
          $textSize={currentFont.xsmall_font_size}
          $textWeight={currentFont.xsmall_font_weight}
          $textColor={currentTheme.colors.audio_player_text_color}
        >
          {t('audio_player.backward_text')}
        </XSmallText>
      </AudioPlayerProgress>
    </BackgroundAudioPlayer>
  );
};

export default AudioPlayer;
