import { VFC, memo } from 'react';
import { CheckBoxType } from '../../types/form/index';

export const CheckBox: VFC<CheckBoxType> = memo((props) => {
  const { name, value} = props

  return (
    <div className={'c-checkbox'}>
      <input id={name} type={'checkbox'} name={name} value={value} />
      <label htmlFor={name}>{value}</label>
    </div>
  );
});