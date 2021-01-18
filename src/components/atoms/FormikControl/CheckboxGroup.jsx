import { ErrorMessage, Field } from 'formik';
import React from 'react';

const CheckboxGroup = ({ name, options, ...rest }) => {
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="checkbox"
                id="option.value"
                {...field}
                {...rest}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default CheckboxGroup;
