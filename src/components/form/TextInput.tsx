import { VFC, memo } from 'react';
import { TextInputType } from '../../types/form/index';

export const TextInput: VFC<TextInputType> = memo((props) => {
  const { name, placeholder = '入力してください', size } = props;

  return (
    <div className={size ? `c-input c-input--${size}` : 'c-input'}>
      <input type={'text'} name={name} placeholder={placeholder} />
    </div>
  );
});
