import React from 'react';
import { InputCheckboxParent } from './styles';
import { InputType } from 'utils/constants';
import CustomTextArea from 'components/custom_textarea';
import Checkbox from 'components/checkbox';

interface InputProps {
  inputType: string;
  inputs: string[];
}

const InputsComponent = (props: InputProps) => {

  return (
    <>
      {props.inputType === InputType.text ? (
        <CustomTextArea placeholder={'session.textfield'} />
      ) : props.inputType === InputType.checkbox ? (
        <InputCheckboxParent>
          {props.inputs.map((checkbox, index) => (
            <Checkbox key={index} value={checkbox} selected={false} />
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
