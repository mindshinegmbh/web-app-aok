import React from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { TextAreaParent } from './styles';
import { useBaseProps } from 'hocs/base_component';
import { InputData } from 'models/session_type';

interface CustomTextAreaProps extends AriaTextFieldProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  setSelectedInputValues?: (draft: (input: InputData[]) => void) => void;
  inputId?: number;
  cardId?: number;
}

const CustomTextArea = (props: CustomTextAreaProps) => {
  const { currentTheme, t } = useBaseProps();
  const ref = React.useRef(null);

  const onChangeText = (value: string) => {
    if (props.setSelectedInputValues) {
      props.setSelectedInputValues((draft) => {
        const foundValue = draft.find(
          (item) => item.card_id === props.cardId && item.id === props.inputId,
        );
        if (foundValue) {
          foundValue.text = value;
        }
      });
    } else {
      props.setValue(value);
    }
  };

  return (
    <TextAreaParent
      ref={ref}
      $textColor={currentTheme.colors.text_field_place_holder}
      $backgroundColor={currentTheme.colors.field_background_color}
      rows={10}
      placeholder={t(props.placeholder)}
      aria-multiline={true}
      aria-label='his is Text Area aria-label'
      defaultValue={props.value || ''}
      onChange={(event: React.ChangeEvent<{ value: string }>) => onChangeText(event.target.value)}
    />
  );
};

export default CustomTextArea;
