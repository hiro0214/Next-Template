import { VFC, memo } from 'react';
import { TextInputType } from '../../types/form/index';

const componentName = 'TextInput';

export const TextInput: VFC<TextInputType> = memo((props) => {
  const { name, placeholder = '入力してください', size } = props;

  if (!name) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <div className={size ? `c-input c-input--${size}` : 'c-input'}>
      <input type={'text'} name={name} placeholder={placeholder} />
    </div>
  );
});
