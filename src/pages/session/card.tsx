import React from 'react';
import { Card } from 'models/session_type';
import { RegularText } from 'styling/common';
import { CardParent } from './styles';
import AudioPlayer from 'components/audio_player';
import { useBaseProps } from 'hocs/base_component';

interface CardProps {
  card: Card;
}

const CardComponent = (props: CardProps) => {
  const { currentTheme, currentFont } = useBaseProps();

  return (
    <CardParent>
      <AudioPlayer url={props.card.audio_url} />
      <RegularText
        $textSize={currentFont.regular_font_size}
        $textColor={currentTheme.colors.settings_button_color}
      >
        {props.card.title}
      </RegularText>
    </CardParent>
  );
};

export default CardComponent;
