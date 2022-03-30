import { VFC, memo } from 'react';
import { CommonButtonType } from '../../types/common/button';

export const Button: VFC<CommonButtonType> = memo((props) => {
  const { label, color, onclick, isDisabled } = props;

  return (
    <button
      className={color ? `c-btn c-btn--${color}` : 'c-btn'}
      type={'button'}
      onClick={onclick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
});
