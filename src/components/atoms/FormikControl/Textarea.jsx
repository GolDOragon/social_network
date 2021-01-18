import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Textarea = ({ name, ...rest }) => {
  return (
    <div className="form__textarea">
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Textarea;
