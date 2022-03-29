import { VFC, memo } from 'react';
import { TextAreaType } from '../../types/form/index';

export const TextArea: VFC<TextAreaType> = memo((props) => {
  const { name, placeholder = '入力してください', rows = 5 } = props;

  return (
    <div className={'c-textarea'}>
      <textarea name={name} placeholder={placeholder} rows={rows} />
    </div>
  );
});
