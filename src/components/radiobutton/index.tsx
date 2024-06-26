import React, { MouseEvent, useState } from 'react';
import { RadioButtonParent, TextParent } from './styles';
import { SmallText } from '../../styling/common';
import Icon from '../icon';
import { useBaseProps } from 'hocs/base_component';
import { InputData } from 'models/session_type';

interface RadioButtonProps {
  value: string;
  selected: boolean;
  setSelectedInputValues?: (draft: (input: InputData[]) => void) => void;
  inputId?: number;
  cardId?: number;
  index: number;
}

const RadioButton = (props: RadioButtonProps) => {
  const { currentFont, currentSizes, currentTheme } = useBaseProps();
  const [selected, setSelected] = useState(false);

  const getAltText = () => (selected ? 'Selected RadioButton' : 'Unseleted RadioButton');

  const onClickRadioButton = (e: MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
    if (props.setSelectedInputValues) {
      props.setSelectedInputValues((draft) => {
        const foundValue = draft.find(
          (item) => item.card_id === props.cardId && item.id === props.inputId,
        );
        if (foundValue) {
          foundValue?.radios.forEach((value, key, map) => map.set(key, false));
          foundValue.radios.set(props.index, true);
        }
      });
    }
  };
  return (
    <RadioButtonParent
      onClick={(e: MouseEvent) => onClickRadioButton(e)}
      href='#'
      $backgroundColor={currentTheme.colors.screen_background}
      aria-selected={selected}
    >
      <Icon
        width={currentSizes.back.width}
        height={currentSizes.back.height}
        alt={getAltText()}
        link={
          selected
            ? currentTheme.icons.radiobutton_selected
            : currentTheme.icons.radiobutton_unselected
        }
      />
      <TextParent>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {props.value}
        </SmallText>
      </TextParent>
    </RadioButtonParent>
  );
};

export default RadioButton;
