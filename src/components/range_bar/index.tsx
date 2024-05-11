import React from 'react';
import { RangeBarParent } from './styles';
import { useBaseProps } from 'hocs/base_component';

interface RangeBarProps {
  defaultRange: number;
  setRange: (range: number) => void;
}

const RangeBar = (props: RangeBarProps) => {
  const { currentTheme } = useBaseProps();

  return (
    <RangeBarParent
      step='1'
      type='range'
      min='1'
      max='3'
      $backgroundColor={currentTheme.colors.range_bar}
      value={props.defaultRange}
      onChange={(value) => props.setRange(Number(value.target.value))}
    ></RangeBarParent>
  );
};

export default RangeBar;
