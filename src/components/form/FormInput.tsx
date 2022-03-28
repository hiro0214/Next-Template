import { VFC, memo, ReactElement } from 'react';
import {
  FormInputPropsType,
  FormInputElementType,
  TextInputType,
  TextAreaType,
  RadioGroupType,
  CheckBoxType
} from '../../types/form/index';
import { CheckBox } from './CheckBox';
import { RadioGroup } from './RadioGroup';
import { TextArea } from './TextArea';
import { TextInput } from './TextInput';

export const FormInput: VFC<FormInputPropsType> = memo((props) => {
  const { type, element } = props;

  let _element: FormInputElementType;
  let component: ReactElement = <></>;

  switch (type) {
    case 'text':
      _element = element as TextInputType;
      component = <TextInput name={_element.name} placeholder={_element.placeholder} />;
      break;
    case 'textarea':
      _element = element as TextAreaType;
      component = <TextArea name={_element.name} placeholder={_element.placeholder} rows={_element.rows} />;
      break;
    case 'radio':
      _element = element as RadioGroupType;
      component = <RadioGroup name={_element.name} values={_element.values} />;
      break;
    case 'checkbox':
      _element = element as CheckBoxType;
      component = <CheckBox name={_element.name} value={_element.value} />
      break;
  }

  return component;
});
