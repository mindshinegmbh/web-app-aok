import React from 'react';
import { InputCheckboxParent, TextAreaParent } from './styles';
import { useBaseProps } from 'hocs/base_component';
import { InputType } from 'utils/constants';
import CustomTextArea from 'components/custom_textarea';
import Checkbox from 'components/checkbox';

interface InputProps {
  inputType: string;
  inputs: string[];
}

const InputsComponent = (props: InputProps) => {
  const { currentTheme, currentFont, t } = useBaseProps();

  return (
    <>
      {props.inputType === InputType.text ? (
        <CustomTextArea placeholder={'session.textfield'} />
      ) : props.inputType === InputType.checkbox ? (
        <InputCheckboxParent>
          {props.inputs.map((checkbox) => (
            <Checkbox value={checkbox} selected={false} />
          ))}
        </InputCheckboxParent>
      ) : props.inputType === InputType.radio ? (
        <div></div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default InputsComponent;
