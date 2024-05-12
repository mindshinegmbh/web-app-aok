import React from 'react';
import { ButtonParent } from './styles';
import { SmallText } from '../../styling/common';
import { useBaseProps } from 'hocs/base_component';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
  const { currentFont, currentTheme } = useBaseProps();

  return (
    <ButtonParent
      onClick={() => props.onClick()}
      $backgroundColor={currentTheme.colors.button_background}
    >
      <SmallText $textSize={currentFont.small_font} $textColor={currentTheme.colors.button_text}>
        {props.text}
      </SmallText>
    </ButtonParent>
  );
};

export default CustomButton;
