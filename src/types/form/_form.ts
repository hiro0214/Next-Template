import { CheckBoxType } from './_checkbox';
import { RadioGroupType } from './_radio';
import { SelectBoxType } from './_select';
import { TextAreaType } from './_textarea';
import { TextInputType } from './_textInput';

export interface FormPropsType {
  ttl: string;
  name: string;
  children: FormItemType[];
  btn: FormBtnType;
}

export interface FormItemType extends FormInputPropsType {
  hdg: string;
  required?: boolean;
  annotation?: string;
}

export interface FormInputPropsType {
  type: FormInputTypeAttrType;
  element: FormInputElementType;
}

export type FormInputElementType = TextInputType | TextAreaType | RadioGroupType | CheckBoxType | SelectBoxType;

type FormInputTypeAttrType = 'text' | 'textarea' | 'radio' | 'checkbox' | 'select';

export interface FormBtnType {
  label: string;
  onclick: () => void;
  goBack?: boolean;
}
