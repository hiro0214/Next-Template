import { VFC, memo } from 'react';
import { SelectBoxType } from '../../types/form/index';

const componentName = 'SelectBox';

export const SelectBox: VFC<SelectBoxType> = memo((props) => {
  const { name, values, hdg } = props;

  if (!name || !values) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

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
