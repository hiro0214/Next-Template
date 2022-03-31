import { VFC, memo } from 'react';
import { SelectBoxType } from '../../types/form/index';

export const SelectBox: VFC<SelectBoxType> = memo((props) => {
  const { name, values, hdg } = props;

  return (
    <div className={hdg ? 'c-select c-select--hdg' : 'c-select'}>
      {hdg && <span className={'c-select__hdg'}>{hdg}</span>}
      <select name={name}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
});
