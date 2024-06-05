import React, { MouseEvent, useState } from 'react';
import { CheckBoxParent, TextParent } from './styles';
import { SmallText } from '../../styling/common';
import Icon from '../icon';
import { useBaseProps } from 'hocs/base_component';
import { InputData } from 'models/session_type';

interface CheckboxProps {
  value: string;
  selected: boolean;
  setSelectedInputValues: (draft: (input: InputData[]) => void) => void;
  cardId: number;
  inputId: number;
  index: number;
}

const Checkbox = (props: CheckboxProps) => {
  const { currentFont, currentSizes, currentTheme } = useBaseProps();
  const [selected, setSelected] = useState(false);

  const getAltText = () => (selected ? 'Selected Checkbox' : 'Unseletec Checkbox');

  const onClickCheckbox = (e: MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
    if (props.setSelectedInputValues) {
      props.setSelectedInputValues((draft) => {
        const foundValue = draft.find(
          (item) => item.card_id === props.cardId && item.id === props.inputId,
        );
        if (foundValue) {
          foundValue.checkbox.set(props.index, !selected);
        }
      });
    }
  };
  return (
    <CheckBoxParent
      onClick={(e: MouseEvent) => onClickCheckbox(e)}
      href='#'
      $backgroundColor={currentTheme.colors.screen_background}
      aria-checked={selected}
    >
      <Icon
        width={currentSizes.back.width}
        height={currentSizes.back.height}
        alt={getAltText()}
        link={
          selected ? currentTheme.icons.checkbox_selected : currentTheme.icons.checkbox_unselected
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
    </CheckBoxParent>
  );
};

export default Checkbox;
