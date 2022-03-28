import { VFC, memo } from 'react';
import { FormPropsType } from '../../types/form/index';
import { FormInput } from './FormInput';

export const Form: VFC<FormPropsType> = memo((props) => {
  const { name, children, btn } = props;

  return (
    <form className='c-form' name={name}>
      {children.map((item, i) => (
        <div className='c-form__item' key={i}>
          <div className='c-form__hdg'>{item.hdg}</div>
          <div className='c-form__detail'>
            <FormInput type={item.type} element={item.element} />
          </div>
        </div>
      ))}
      <div className='c-form__btn'>
        {btn.goBack && <button onClick={() => history.back()}>戻る</button>}
        <button type={'button'} onClick={btn.onclick}>
          {btn.label}
        </button>
      </div>
    </form>
  );
});
