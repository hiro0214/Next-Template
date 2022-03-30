import { VFC, memo } from 'react';
import { Button } from 'components/common/Button';
import { FormPropsType } from '../../types/form/index';
import { FormInput } from './FormInput';

export const Form: VFC<FormPropsType> = memo((props) => {
  const { ttl, name, children, btn } = props;

  return (
    <form className='c-form' name={name}>
      <h2 className='c-form__ttl c-hdg c-hdg--2'>{ttl}</h2>
      {children.map((item, i) => (
        <div className='c-form__item' key={i}>
          <div className='c-form__hdg'>
            {item.hdg}
            {item.required && <span className='c-form__required'>必須</span>}
          </div>
          <div className='c-form__detail'>
            {item.annotation && <span className='c-form__label'>{item.annotation}</span>}
            <FormInput type={item.type} element={item.element} />
          </div>
        </div>
      ))}
      <div className='c-form__btn'>
        {btn.goBack && <Button label={'戻る'} color={'white'} onclick={() => history.back()} />}
        <Button label={btn.label} onclick={btn.onclick} />
      </div>
    </form>
  );
});
