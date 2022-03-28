import { VFC, memo } from 'react';
import { RadioBtnType } from '../../types/form/index';

export const RadioBtn: VFC<RadioBtnType> = memo((props) => {
  const { index, name, value } = props;

  return (
    <div className={'c-radio'}>
      <input id={`${name}_${index}`} type={'radio'} name={name} value={value} />
      <label htmlFor={`${name}_${index}`}>{value}</label>
    </div>
  );
});
