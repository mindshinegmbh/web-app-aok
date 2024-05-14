import React from 'react';
import { InputCheckboxParent } from './styles';
import {
  EnterAnimationY,
  ExitAnimationY,
  InitialAnimationY,
  InputType,
  transitionInput,
} from 'utils/constants';
import CustomTextArea from 'components/custom_textarea';
import Checkbox from 'components/checkbox';
import RadioButton from 'components/radiobutton';
import { motion } from 'framer-motion';

interface InputProps {
  inputType: string;
  inputs: string[];
}

const InputsComponent = (props: InputProps) => {
  return (
    <motion.div
      initial={InitialAnimationY}
      animate={EnterAnimationY}
      exit={ExitAnimationY}
      transition={transitionInput}
    >
      {props.inputType === InputType.text ? (
        <CustomTextArea  placeholder={'session.textfield'} />
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
    </motion.div>
  );
};

export default InputsComponent;
