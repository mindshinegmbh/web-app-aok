import React, { MouseEvent, useState } from 'react';
import { CheckBoxParent, TextParent } from './styles';
import { RegularText, SmallText } from '../../styling/common';
import Icon from '../icon';
import { useBaseProps } from 'hocs/base_component';

interface CheckboxProps {
  value: string;
  selected: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { t, currentFont, currentSizes, currentTheme } = useBaseProps();
  const [selected, setSelected] = useState(false);
  const ref = React.useRef(null);

  const getAltText = () => (selected ? 'Selected Checkbox' : 'Unseletec Checkbox');

  const onClickCheckbox = (e: MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };
  return (
    <CheckBoxParent
      onClick={(e: MouseEvent) => onClickCheckbox(e)}
      href='#'
      $backgroundColor={currentTheme.colors.screen_background}
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
