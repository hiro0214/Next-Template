import { VFC, memo } from 'react';
import { RadioGroupType } from '../../types/form/index';
import { RadioBtn } from './RadioBtn';

export const RadioGroup: VFC<RadioGroupType> = memo((props) => {
  const { name, values } = props;

  return (
    <div className={'c-radiogroup'}>
      {values.map((value, i) => (
        <RadioBtn key={i} index={i + 1} name={name} value={value} />
      ))}
    </div>
  );
});
