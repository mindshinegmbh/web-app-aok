import React from 'react';
import { PagerParent, DotActive, DotInactive, DotParent } from './styles';
import { useBaseProps } from 'hocs/base_component';

interface CardsPagerProps {
  total: number;
  current: number;
}

const CardsPager = (props: CardsPagerProps) => {
  const { currentTheme } = useBaseProps();
  const list = Array.from(Array(props.total).keys());
  return (
    <PagerParent
      $backgroundColor={currentTheme.colors.pager_background}
      $borderColor={currentTheme.colors.pager_border}
    >
      {list?.map((value, index) => {
        return (
          <DotParent key={index}>
            {props.current === index + 1 ? (
              <DotActive $backgroundColor={currentTheme.colors.pager_dot_active}></DotActive>
            ) : (
              <DotInactive
                $backgroundColor={currentTheme.colors.pager_dot_inactive}
                $isNext={props.current === value}
              ></DotInactive>
            )}
          </DotParent>
        );
      })}
    </PagerParent>
  );
};

export default CardsPager;
