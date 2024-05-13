import React from 'react';
import { Card } from 'models/session_type';
import { LargeText, SmallText } from 'styling/common';
import { BodyTextParent, CardParent, CenterTextParent, UlParent } from './styles';
import AudioPlayer from 'components/audio_player';
import { useBaseProps } from 'hocs/base_component';
import InputsComponent from './inputs';

interface CardProps {
  card: Card;
}

const CardComponent = (props: CardProps) => {
  const { currentTheme, currentFont } = useBaseProps();

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
        <BodyTextParent>
          <SmallText
            $textSize={currentFont.small_font}
            $textColor={currentTheme.colors.all_white_color}
          >
            {props.card.body}
          </SmallText>
        </BodyTextParent>
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
        <InputsComponent
          inputType={props.card.inputType}
          inputs={[
            'First',
            'Second',
            'Third',
            'Fourth',
           ]}
        />
      </CenterTextParent>
    </CardParent>
  );
};

export default CardComponent;
