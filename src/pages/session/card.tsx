import React from 'react';
import { Card } from 'models/session_type';
import { LargeText, SmallText } from 'styling/common';
import { CardParent, CenterTextParent, TextAreaParent, UlParent } from './styles';
import AudioPlayer from 'components/audio_player';
import { useBaseProps } from 'hocs/base_component';

interface CardProps {
  card: Card;
}

const CardComponent = (props: CardProps) => {
  const { currentTheme, currentFont, t } = useBaseProps();

  return (
    <CardParent>
      <AudioPlayer url={props.card.audio_url} />
      <CenterTextParent>
        <LargeText
          $textSize={currentFont.large_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {props.card.title}
        </LargeText>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {props.card.body}
        </SmallText>
        <UlParent $textColor={currentTheme.colors.all_white_color}>
          {props.card.bullet.map((bullet, index) => {
            return (
              <li key={index}>
                <SmallText
                  $textSize={currentFont.small_font}
                  $textColor={currentTheme.colors.all_white_color}
                >
                  {bullet}
                </SmallText>
              </li>
            );
          })}
        </UlParent>
        <TextAreaParent
          $textColor={currentTheme.colors.text_field_place_holder}
          $backgroundColor={currentTheme.colors.field_background_color}
          color={currentTheme.colors.text_field_place_holder}          
          rows={10} 
          placeholder={t('session.textfield')}
        />
      </CenterTextParent>
    </CardParent>
  );
};

export default CardComponent;
