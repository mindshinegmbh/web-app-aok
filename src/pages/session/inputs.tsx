import React, { useEffect, useState } from 'react';
import { InputCheckboxParent } from './styles';
import { InputType } from 'utils/constants';
import CustomTextArea from 'components/custom_textarea';
import Checkbox from 'components/checkbox';
import RadioButton from 'components/radiobutton';

interface InputProps {
  inputType: string;
  inputs: string[];
}

const InputsComponent = (props: InputProps) => {
  const [radioButtonData , setRadioButtonData] = useState([])
  
  
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
        <InputCheckboxParent>
          {props.inputs.map((checkbox, index) => (
            <RadioButton key={index} value={checkbox} selected={false} />
          ))}
        </InputCheckboxParent>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default InputsComponent;
