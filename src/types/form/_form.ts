import { CheckBoxType } from './_checkbox';
import { RadioGroupType } from './_radio';
import { TextAreaType } from './_textarea';
import { TextInputType } from './_textInput';

export interface FormPropsType {
  name: string;
  children: FormItemType[];
  btn: {
    label: string;
    onclick: () => void;
    goBack: boolean;
  };
}

export interface FormItemType extends FormInputPropsType {
  hdg: string;
}

export interface FormInputPropsType {
  type: FormInputTypeAttrType;
  element: FormInputElementType;
}

export type FormInputElementType = TextInputType | TextAreaType | RadioGroupType | CheckBoxType;

type FormInputTypeAttrType = 'text' | 'textarea' | 'radio' | 'checkbox';
