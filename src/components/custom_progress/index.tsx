import React from 'react';
import { ProgressParent } from './styles';
import ProgressBar from '@ramonak/react-progress-bar';

interface ProgressProps {
  max: number;
  value: number;
  color: string;
  unCompletedColor: string;
}

const Progress = ({ max, value, color, unCompletedColor }: ProgressProps) => {
  return (
    <ProgressParent>
      <ProgressBar
        baseBgColor={unCompletedColor}
        height={'4px'}
        completed={value}
        maxCompleted={max}
        bgColor={color}
        isLabelVisible={false}
      />
    </ProgressParent>
  );
};

export default Progress;
