import * as Yup from 'yup';

export const requiredField = (value) => {
  if (!!value) return undefined;

  return 'Field is required!';
};

export const messageSchema = Yup.object().shape({
  message: Yup.string().required(''),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  rememberMe: Yup.array(),
  captcha: Yup.boolean(),
});
