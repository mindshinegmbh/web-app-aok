import React, { MouseEvent, useState } from 'react';
import { RadioButtonParent, TextParent } from './styles';
import {  SmallText } from '../../styling/common';
import Icon from '../icon';
import { useBaseProps } from 'hocs/base_component';

interface RadioButtonProps {
  value: string;
  selected: boolean;
}

const RadioButton = (props: RadioButtonProps) => {
  const { currentFont, currentSizes, currentTheme } = useBaseProps();
  const [selected, setSelected] = useState(false);
  
  const getAltText = () => (selected ? 'Selected RadioButton' : 'Unseleted RadioButton');

  const onClickCheckbox = (e: MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };
  return (
    <RadioButtonParent
      onClick={(e: MouseEvent) => onClickCheckbox(e)}
      href='#'
      $backgroundColor={currentTheme.colors.screen_background}
    >
      <Icon
        width={currentSizes.back.width}
        height={currentSizes.back.height}
        alt={getAltText()}
        link={
          selected ? currentTheme.icons.radiobutton_selected : currentTheme.icons.radiobutton_unselected
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
