import { Form, Formik } from 'formik';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { loginSchema } from '../../redux/utils/validators';
import FormikControl from '../atoms/FormikControl';
import css from './Login.module.css';

const LoginForm = (props) => {
  const handleSubmit = (obj, actions) => {
    props
      .onSubmit({
        ...obj,
        rememberMe: obj.rememberMe.includes('rememberMe'),
      })
      .catch((error) => {
        actions.setFieldError('serverSide', error);
        actions.setFieldValue('password', '');
        actions.setTouched({
          password: false,
        });
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: [],
        // captcha: true,
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
      render={({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <FormikControl
              control="input"
              type="text"
              name="email"
              style={{ backgroundColor: 'red' }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <FormikControl
              control="input"
              type="password"
              name="password"
              style={{ backgroundColor: 'red' }}
            />
          </div>
          <div>
            <FormikControl
              control="checkbox"
              name="rememberMe"
              options={[{ key: ' Remember me', value: 'rememberMe' }]}
            />
          </div>
          {/* <div>
            <label htmlFor="captcha">Captcha</label>
            <FormikControl control="input" name="captcha" />
          </div> */}

          <div>{errors.serverSide && `Error: ${errors.serverSide}`}</div>
          <button type="submit">Login</button>
        </Form>
      )}
    />
  );
};

const Login = (props) => {
  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div className={css.login}>
      <h2>Login</h2>
      <LoginForm onSubmit={props.login} />
    </div>
  );
};

export default Login;
