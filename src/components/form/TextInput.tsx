import { VFC, memo } from 'react';
import { TextInputType } from '../../types/form/index';

export const TextInput: VFC<TextInputType> = memo((props) => {
  const { name, placeholder } = props;

  return (
    <div className={'c-input'}>
      <input type={'text'} name={name} placeholder={placeholder} />
    </div>
  );
});
