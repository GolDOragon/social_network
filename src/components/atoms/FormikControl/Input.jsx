import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Input = ({ name, ...rest }) => {
  return (
    <div className="form__input">
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Input;
