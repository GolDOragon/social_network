import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import Input from './Input';
import Textarea from './Textarea';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
