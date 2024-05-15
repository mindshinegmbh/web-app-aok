import React from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { useTextField } from 'react-aria';
import { TextAreaParent } from './styles';
import { useBaseProps } from 'hocs/base_component';

interface CustomTextAreaProps extends AriaTextFieldProps {
  placeholder: string;
}

const CustomTextArea = (props: CustomTextAreaProps) => {
  const { currentTheme, t } = useBaseProps();
  const ref = React.useRef(null);
  const { inputProps } = useTextField(
    {
      ...props,
      inputElementType: 'textarea',
      "aria-label": "This is Text Area aria-label"
    },
    ref,
  );
  return (
    <TextAreaParent
      {...inputProps}
      ref={ref}
      $textColor={currentTheme.colors.text_field_place_holder}
      $backgroundColor={currentTheme.colors.field_background_color}
      rows={10}
      placeholder={t(props.placeholder)}
    />
  );
};

export default CustomTextArea;
