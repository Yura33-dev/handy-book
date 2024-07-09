import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Name required to fill out'),
  email: Yup.string()
    .email('Invalid email address')
    .min(2, 'Too short')
    .max(40, 'Too long')
    .required('Email number required to fill out'),
  password: Yup.string()
    .min(7, 'Too short')
    .max(30, 'Too long')
    .required('Password is necessary to fill out'),
  confirmPassword: Yup.string()
    .required('You should comfirm your password')
    .oneOf([Yup.ref('password')], 'Passwords don`t match'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .min(2, 'Too short')
    .max(40, 'Too long')
    .required('Email number required to fill out'),
  password: Yup.string()
    .min(7, 'Too short')
    .max(30, 'Too long')
    .required('Password is necessary to fill out'),
});
