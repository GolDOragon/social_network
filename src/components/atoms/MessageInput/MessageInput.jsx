import { Form, Formik } from 'formik';
import React from 'react';
import { messageSchema } from '../../../redux/utils/validators';
import FormikControl from '../FormikControl';
import css from './MessageInput.module.css';

const MessageInput = (props) => {
  const handleSubmit = (obj, { resetForm }) => {
    props.onSubmit(obj.message);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={messageSchema}
      onSubmit={handleSubmit}
      render={({ errors, touched }) => (
        <Form className={css.MessageInput}>
          <div className={css.messageInput__inputContainer}>
            <FormikControl
              control="textarea"
              type="text"
              name="message"
              className={css.messageInput__input}
            />
          </div>
          <div className={css.messageInput__sendContainer}>
            <button className={css.messageInput__send} type="submit">
              SEND
            </button>
          </div>
        </Form>
      )}
    />
  );
};

export default MessageInput;
