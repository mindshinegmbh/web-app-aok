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
import { InputData } from 'models/session_type';

interface InputProps {
  inputType: string;
  inputs: string[];
  textInputValue: string;
  setTextInputValue: (value: string) => void;
  inputId: number;
  setSelectedInputValues: (draft: (input: InputData[]) => void) => void;
  cardId: number;
  selectedInputValues: InputData[];
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
        <CustomTextArea
          inputId={props.inputId}
          cardId={props.cardId}
          placeholder={'session.textfield'}
          setSelectedInputValues={props.setSelectedInputValues}
          value={props.textInputValue}
          setValue={props.setTextInputValue}
        />
      ) : props.inputType === InputType.checkbox ? (
        <InputCheckboxParent aria-multiselectable={true}>
          {props.inputs.map((checkbox, index) => (
            <Checkbox
              index={index}
              setSelectedInputValues={props.setSelectedInputValues}
              inputId={props.inputId}
              cardId={props.cardId}
              key={index}
              value={checkbox}
              selected={false}
            />
          ))}
        </InputCheckboxParent>
      ) : props.inputType === InputType.radio ? (
        <InputCheckboxParent aria-multiselectable={false}>
          {props.inputs.map((radio, index) => (
            <RadioButton
              index={index}
              setSelectedInputValues={props.setSelectedInputValues}
              inputId={props.inputId}
              cardId={props.cardId}
              key={index}
              value={radio}
              selected={
                props.selectedInputValues
                  ?.find((c) => c.input_types === InputType.radio && c.card_id === props.cardId)
                  ?.radios?.get(index) || false
              }
            />
          ))}
        </InputCheckboxParent>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
};

export default InputsComponent;
