import React from 'react';
import type { RootState } from '../redux/store';
import { decrement, increment } from '../redux/common';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export function Counter() {
  const count = useAppSelector((state: RootState) => state.common.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
